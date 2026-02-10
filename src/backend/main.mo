import Map "mo:core/Map";
import List "mo:core/List";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import PostHelper "post-helper";
import MixinStorage "blob-storage/Mixin";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";
import Migration "migration";

(with migration = Migration.run)
actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
  };

  public type Post = PostHelper.Post;
  public type ProcessedPost = PostHelper.ProcessedPost;

  public type IngestionSource = {
    id : Text;
    url : Text;
    imageRule : Text;
  };

  public type BrandImage = {
    url : Text;
    lastUpdated : Int;
    thumbnail : Text;
    color : Text;
  };

  public type UserProfile = {
    name : Text;
  };

  let submissions = Map.empty<Text, ContactSubmission>();
  let posts = Map.empty<Text, PostHelper.Post>();
  let ingestionSources = Map.empty<Text, IngestionSource>();
  let processedQueue = List.empty<PostHelper.ProcessedPost>();
  var nextPostId = 1;
  var lastIngestionTimestamp = 0;
  let userProfiles = Map.empty<Principal, UserProfile>();
  var brandImage : ?BrandImage = null;
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

  private func isPostPublished(post : PostHelper.Post) : Bool {
    switch (post) {
      case (#examNotification(p)) { p.published };
      case (#result(p)) { p.published };
      case (#admitCard(p)) { p.published };
      case (#scholarship(p)) { p.published };
      case (#educationNews(p)) { p.published };
      case (#generalInfo(p)) { p.published };
      case (#stateScheme(p)) { p.published };
    };
  };

  public query ({ caller }) func getPublishedPostsByCategory(_ : Text) : async [PostHelper.Post] {
    // Public access - anyone including guests can view published posts
    // Filter to only return published posts
    let allPosts = posts.values().toArray();
    let publishedPosts = List.empty<PostHelper.Post>();

    for (post in allPosts.values()) {
      if (isPostPublished(post)) {
        publishedPosts.add(post);
      };
    };

    publishedPosts.values().toArray();
  };

  public query ({ caller }) func getPostById(id : Text) : async ?PostHelper.Post {
    // Public access for published posts, admin access for unpublished
    switch (posts.get(id)) {
      case (null) { null };
      case (?post) {
        if (isPostPublished(post)) {
          // Published posts are accessible to everyone
          ?post;
        } else {
          // Unpublished posts require admin access
          if (AccessControl.isAdmin(accessControlState, caller)) {
            ?post;
          } else {
            null; // Return null instead of trapping for better UX
          };
        };
      };
    };
  };

  public query ({ caller }) func getBrandImage() : async ?BrandImage {
    brandImage;
  };

  public shared ({ caller }) func updateBrandImage(image : BrandImage) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update the brand image");
    };
    brandImage := ?image;
  };

  public shared ({ caller }) func addIngestionSource(source : IngestionSource) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can add ingestion sources");
    };
    ingestionSources.add(source.id, source);
  };

  public shared ({ caller }) func removeIngestionSource(id : Text) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can remove ingestion sources");
    };
    ingestionSources.remove(id);
  };

  public shared ({ caller }) func triggerAutomatedIngestion() : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can manually trigger ingestion");
    };
    let currentTime = Time.now();
    let timeDifference = currentTime - lastIngestionTimestamp;

    if (Int.abs(timeDifference) >= 86400000000) {
      // 24 hours in nanoseconds equals 86400000000
      // Implement content fetching and processing here
      lastIngestionTimestamp := currentTime.toNat();
    };
  };

  public query ({ caller }) func getIngestionSources() : async [IngestionSource] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view ingestion sources");
    };
    ingestionSources.values().toArray();
  };
};
