import Map "mo:core/Map";
import List "mo:core/List";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinStorage "blob-storage/Mixin";
import PostHelper "post-helper";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
  };

  public type UserProfile = {
    name : Text;
  };

  public type Post = PostHelper.Post;
  public type ProcessedPost = PostHelper.ProcessedPost;

  let submissions = Map.empty<Text, ContactSubmission>();
  let posts = Map.empty<Text, PostHelper.Post>();
  let processedQueue = List.empty<PostHelper.ProcessedPost>();
  var nextPostId = 1;
  let userProfiles = Map.empty<Principal, UserProfile>();
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);
  include MixinStorage();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      message;
    };
    submissions.add(email, submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view all submissions");
    };
    submissions.values().toArray();
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public shared ({ caller }) func manualIngestContent(title : Text, category : Text, body : Text, excerpt : Text, stateTags : [Text]) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can ingest content");
    };

    let processedPost : ProcessedPost = PostHelper.processRawContent(
      title,
      category,
      category,
      body,
      nextPostId.toText(),
      excerpt,
      stateTags,
    );
    processedQueue.add(processedPost);
    nextPostId += 1;
  };

  public shared ({ caller }) func autoPublishScheduledContent() : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only the system or admins can trigger auto-publishing");
    };

    if (not processedQueue.isEmpty()) {
      let firstItem = processedQueue.first();
      let remainingItems = processedQueue.values().toArray();
      processedQueue.clear();

      // Start from index 1 to skip the firstItem
      var index = 0;
      for (item in remainingItems.values()) {
        if (index != 0) {
          processedQueue.add(item);
        };
        index += 1;
      };

      switch (firstItem) {
        case (null) {};
        case (?item) {
          let post : PostHelper.Post = #generalInfo(
            {
              id = item.id;
              title = item.title;
              excerpt = item.excerpt;
              imageUrl = item.imageUrl;
              lastUpdatedAt = item.lastUpdatedAt;
              body = item.body;
              published = false;
              stateTags = item.stateTags;
            }
          );
          posts.add(item.id, post);
        };
      };
    };
  };

  public query ({ caller }) func getPublishedPostsByCategory(_ : Text) : async [PostHelper.Post] {
    posts.values().toArray();
  };

  public query ({ caller }) func getPostById(id : Text) : async ?PostHelper.Post {
    posts.get(id);
  };
};
