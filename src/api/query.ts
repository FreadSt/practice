import {useQuery} from '@tanstack/react-query';
import {getCommentsByPostId, getPostsByUserId, getUsers} from './api.ts';

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: 300000
  })
}

export const usePostsByUserId = (userId: number) => {
  return useQuery({
    queryKey: ['posts', userId],
    queryFn: () => getPostsByUserId(userId),
    staleTime: 300000,
    enabled: !!userId
  })
}

export const useCommentsByPostId = (postId: number) => {
  return useQuery({
    queryKey: ['comments', postId],
    queryFn: () => getCommentsByPostId(postId),
    staleTime: 300000,
    enabled: !!postId
  })
}