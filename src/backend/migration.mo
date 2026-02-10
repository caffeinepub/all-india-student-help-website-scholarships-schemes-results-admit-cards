import Map "mo:core/Map";
import List "mo:core/List";
import PostHelper "post-helper";
import Principal "mo:core/Principal";

module {
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
  };

  type OldActor = {
    submissions : Map.Map<Text, ContactSubmission>;
    posts : Map.Map<Text, PostHelper.Post>;
    processedQueue : List.List<PostHelper.ProcessedPost>;
    userProfiles : Map.Map<Principal, { name : Text }>;
  };

  type NewActor = {
    submissions : Map.Map<Text, ContactSubmission>;
    posts : Map.Map<Text, PostHelper.Post>;
    processedQueue : List.List<PostHelper.ProcessedPost>;
    userProfiles : Map.Map<Principal, { name : Text }>;
    ingestionSources : Map.Map<Text, { id : Text; url : Text; imageRule : Text }>;
  };

  public func run(old : OldActor) : NewActor {
    {
      old with
      ingestionSources = Map.empty<Text, { id : Text; url : Text; imageRule : Text }>()
    };
  };
};
