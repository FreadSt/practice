import type {Post, User, Comment} from './types.ts';
import {API_URL} from '../constants/api';

export async function getUsers (): Promise<User[]> {
  const res = await fetch(`${API_URL}/users`)
  if(!res.ok) throw new Error(res.statusText)
  return await res.json() as User[]
}

export async function getPostsByUserId (userId: number) {
  const res = await fetch(`${API_URL}/posts?userId=${userId}`)
  if(!res.ok) throw new Error(res.statusText)
  return await res.json() as Post[]
}

export async function getCommentsByPostId (postId: number) {
  const res = await fetch(`${API_URL}/comments?postId=${postId}`)
  if(!res.ok) throw new Error(res.statusText)
  return await res.json() as Comment[]
}
