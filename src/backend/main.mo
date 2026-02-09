import Text "mo:core/Text";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
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

  // Persistent storage for contact submissions
  let submissions = Map.empty<Text, ContactSubmission>();

  // User profile storage
  let userProfiles = Map.empty<Principal, UserProfile>();

  // User management (authentication and roles)
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Contact form submission - open to all users including guests
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    // No authorization check - contact forms should be accessible to everyone including anonymous users
    let submission : ContactSubmission = {
      name;
      email;
      message;
    };

    submissions.add(email, submission);
  };

  // Only for future admin use
  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view all submissions");
    };

    let allSubmissions = submissions.values().toArray();
    allSubmissions;
  };

  // User profile management
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
};
