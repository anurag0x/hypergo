interface ICreator {
    name: string;
    id: string;
    handle: string;
    pic: string;
  }
  
  interface IComment {
    count: number;
    commentingAllowed: boolean;
  }
  
  interface IReaction {
    count: number;
    voted: boolean;
  }
  
  interface ISubmission {
    title: string;
    description: string;
    mediaUrl: string;
    thumbnail: string;
    hyperlink: string;
    placeholderUrl: string;
  }
  
  interface IPostsData {
    postId: string;
    creator: ICreator;
    comment: IComment;
    reaction: IReaction;
    submission: ISubmission;
  }

  export interface IVideoData {
    posts: IPostsData[];
    page: number;
    offset: number;
  }
