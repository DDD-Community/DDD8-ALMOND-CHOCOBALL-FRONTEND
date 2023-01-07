import axios from '../../lib/axios';
import type {
  PostDisLikeResponse,
  PostLikeResponse,
  PostPostResponse,
  GetPostResponse,
  GetPostsResponse,
} from './responseType';

export async function fetchPostPost(title: string, imgs: File[]) {
  const response = await axios.post<PostPostResponse>('/posts', {
    data: {
      title,
      imgs,
    },
  });
  return response.data;
}

export async function fetchGetPosts(start: number, limit: number) {
  const response = await axios.get<GetPostsResponse>(
    `/posts?start=${start}&limit=${limit}`
  );
  return response.data;
}

export async function fetchGetPost(postId: number) {
  const response = await axios.get<GetPostResponse>(`/posts/${postId}`);
  return response.data;
}

export async function fetchPostLike(postId: number) {
  const response = await axios.post<PostLikeResponse>(`/posts/like`, {
    data: {
      postId,
    },
  });
  return response.data;
}

export async function fetchPostDisLike(postId: number) {
  const response = await axios.post<PostDisLikeResponse>(`/posts/dislike`, {
    data: {
      postId,
    },
  });
  return response.data;
}
