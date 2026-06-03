import {Loader} from '../../loader/Loader.tsx';
import {useSelectedPost, useSelectedUser} from '../../../app/store/users.ts';
import {usePostsByUserId} from '../../../api/query.ts';

interface Post {
  id: number
  title: string
}

export const PostsList = () => {
  const selectPostId = useSelectedPost((state) => state.selectPostId)
  const selectedUserId = useSelectedUser((state) => state.selectedId)

  const userId = selectedUserId ?? 0

  const {data: posts = [], isPending: isPostsPending, isFetching, isError} = usePostsByUserId(userId);

  return(
    <div>
      <h3 className="font-bold underline">User post</h3>
      {!selectedUserId && <p className="mt-2 text-sm text-gray-500">Select user first</p>}
      {selectedUserId && isPostsPending && <Loader />}
      {selectedUserId && isError && (
        <p className="mt-2 text-sm text-red-600">Failed to load posts</p>
      )}
      {selectedUserId && !isPostsPending && isFetching && (
        <p className="mt-2 text-xs text-gray-500">Refreshing…</p>
      )}
      {posts?.map((post: Post) => (
        <div key={post.id} onClick={() => selectPostId(post.id)}
             className="hover:border-b-2 transform-border p-3 cursor-pointer hover:bg-gray-50">
          <button>{post.title}</button>
        </div>
      ))}
    </div>
  )
}