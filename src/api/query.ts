import {useQuery} from '@tanstack/react-query';
import {getCommentsByPostId, getPostsByUserId, getUsers} from './api.ts';

const FIVE_MIN = 5 * 60 * 1000;
const ONE_HOUR = 60 * 60 * 1000;

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: FIVE_MIN,
    gcTime: ONE_HOUR,
    refetchOnWindowFocus: false,
  })
}

export const usePostsByUserId = (userId: number) => {
  return useQuery({
    queryKey: ['posts', userId],
    queryFn: () => getPostsByUserId(userId),
    staleTime: FIVE_MIN,
    enabled: userId > 0,
    gcTime: ONE_HOUR,
    refetchOnWindowFocus: false,
  })
}

export const useCommentsByPostId = (postId: number) => {
  return useQuery({
    queryKey: ['comments', postId],
    queryFn: () => getCommentsByPostId(postId),
    staleTime: FIVE_MIN,
    enabled: postId > 0,
    gcTime: ONE_HOUR,
    refetchOnWindowFocus: false,
  })
}