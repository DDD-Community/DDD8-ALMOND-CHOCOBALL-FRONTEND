import { AxiosPromise } from 'axios';
import axios from '../../lib/axios';
import type {
  PostDisLikeResponse,
  PostLikeResponse,
  PostPostResponse,
  GetPostResponse,
  GetPostsResponse,
} from './responseType';

export const fetchPostPost = async (
  title: string,
  imgs: File[]
): AxiosPromise<PostPostResponse> => {
  const response = await axios.post('/posts', {
    data: {
      title,
      imgs,
    },
  });
  return response.data;
};

export const fetchGetPosts = async ({
  start,
  limit,
}: {
  start: number;
  limit: number;
}): AxiosPromise<GetPostsResponse> => {
  const response = await axios.get(`/posts?start=${start}&limit=${limit}`);
  return response.data;
};

export const fetchGetPost = async (
  postId: number
): AxiosPromise<GetPostResponse> => {
  const response = await axios.get(`/posts/${postId}`);
  return response.data;
};

export const fetchPostLike = async (
  postId: number
): AxiosPromise<PostLikeResponse> => {
  const response = await axios.post(`/posts/like`, {
    data: {
      postId,
    },
  });
  return response.data;
};

export const fetchPostDisLike = async (
  postId: number
): AxiosPromise<PostDisLikeResponse> => {
  const response = await axios.post(`/posts/dislike`, {
    data: {
      postId,
    },
  });
  return response.data;
};
