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
  const {data: posts = [], isPending: isPostsPending} = usePostsByUserId(selectedUserId as number);

  return(
    <div>
      <h3 className="font-bold underline">User post</h3>
      {selectedUserId && isPostsPending && <Loader />}
      {posts?.map((post: Post) => (
        <div key={post.id} onClick={() => selectPostId(post.id)}
             className="hover:border-b-2 transform-border p-3 cursor-pointer hover:bg-gray-50">
          <button>{post.title}</button>
        </div>
      ))}
    </div>
  )
}