export interface PostPostResponse {
  id: number;
}

export interface Post {
  id: number;
  title: string;
  imgs: string[];
}

export interface GetPostsResponse {
  posts: Post[];
}

export interface GetPostResponse {
  id: number;
  title: string;
  likeCount: number;
  dislikeCount: number;
  imgs: string[];
}

export interface PostLikeResponse {
  id: number;
}

export interface PostDisLikeResponse {
  id: number;
}
