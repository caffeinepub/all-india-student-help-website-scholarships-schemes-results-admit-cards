import Text "mo:core/Text";
import List "mo:core/List";

module {
  type RawContent = {
    title : Text;
    category : Text;
    externalUrl : Text;
    body : Text;
    excerpt : Text;
    contentType : Text;
    stateTags : [Text];
  };

  public type Post = {
    #examNotification : PostType;
    #result : PostType;
    #admitCard : PostType;
    #scholarship : PostType;
    #educationNews : PostType;
    #generalInfo : PostType;
    #stateScheme : PostType;
  };
  public type PostType = {
    id : Text;
    title : Text;
    excerpt : Text;
    imageUrl : Text;
    body : Text;
    lastUpdatedAt : Int;
    published : Bool;
    stateTags : [Text];
  };

  public type ProcessedPost = {
    id : Text;
    title : Text;
    category : Text;
    imageUrl : Text;
    excerpt : Text;
    body : Text;
    lastUpdatedAt : Int;
    published : Bool;
    stateTags : [Text];
  };

  public func processRawContent(
    title : Text,
    category : Text,
    _ : Text, // externalUrl ignored
    body : Text,
    id : Text,
    excerpt : Text,
    stateTags : [Text],
  ) : ProcessedPost {
    {
      id;
      title;
      category;
      imageUrl = "/backend/" # category # ".svg";
      excerpt;
      body;
      lastUpdatedAt = 0;
      published = false;
      stateTags;
    };
  };

  public func categoryFromContentType(contentType : Text) : Post {
    let defaultItem : Post = #generalInfo({
      id = "";
      title = "";
      excerpt = "";
      imageUrl = "";
      body = "";
      lastUpdatedAt = 0;
      published = false;
      stateTags = [];
    });

    switch (contentType.toLower()) {
      case ("exam") {
        #examNotification({
          id = "";
          title = "";
          excerpt = "";
          imageUrl = "";
          body = "";
          lastUpdatedAt = 0;
          published = false;
          stateTags = [];
        });
      };
      case ("result") {
        #result({
          id = "";
          title = "";
          excerpt = "";
          imageUrl = "";
          body = "";
          lastUpdatedAt = 0;
          published = false;
          stateTags = [];
        });
      };
      case ("admit-cards") {
        #admitCard({
          id = "";
          title = "";
          excerpt = "";
          imageUrl = "";
          body = "";
          lastUpdatedAt = 0;
          published = false;
          stateTags = [];
        });
      };
      case ("scholarship") {
        #scholarship({
          id = "";
          title = "";
          excerpt = "";
          imageUrl = "";
          body = "";
          lastUpdatedAt = 0;
          published = false;
          stateTags = [];
        });
      };
      case ("education-news") {
        #educationNews({
          id = "";
          title = "";
          excerpt = "";
          imageUrl = "";
          body = "";
          lastUpdatedAt = 0;
          published = false;
          stateTags = [];
        });
      };
      case ("state-schemes") {
        #stateScheme({
          id = "";
          title = "";
          excerpt = "";
          imageUrl = "";
          body = "";
          lastUpdatedAt = 0;
          published = false;
          stateTags = [];
        });
      };
      case (_) {
        defaultItem;
      };
    };
  };

  public func emptyPostList() : List.List<Post> {
    List.empty<Post>();
  };

  public func emptyStateTags() : [Text] {
    [];
  };
};
