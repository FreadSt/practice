import type {Post, User, Comment} from './types.ts';

export async function getUsers (): Promise<User[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  if(!res.ok) throw new Error(res.statusText)
  return await res.json() as User[]
}

export async function getPostsByUserId (userId: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  if(!res.ok) throw new Error(res.statusText)
  return await res.json() as Post[]
}

export async function getCommentsByPostId (postId: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
  if(!res.ok) throw new Error(res.statusText)
  return await res.json() as Comment[]
}
