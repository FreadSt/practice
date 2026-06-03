import {Loader} from '../../loader/Loader.tsx';
import {useCommentsByPostId} from '../../../api/query.ts';
import {useSelectedPost} from '../../../app/store/users.ts';

interface Comment{
  id: number
  body: string
}

export const CommentsList = () => {
  const selectedPostId = useSelectedPost((state) => state.selectedPostId)
  const postId = selectedPostId ?? 0
  const {data: comments = [], isPending: isCommentsPending, isFetching, isError} = useCommentsByPostId(postId);

  return(
    <div>
      <h3 className="font-bold underline">Comments of post</h3>
      {!selectedPostId && <p className="mt-2 text-sm text-gray-500">Select post first</p>}
      {selectedPostId && isCommentsPending && <Loader />}
      {selectedPostId && isError && (
        <p className="mt-2 text-sm text-red-600">Failed to load comments</p>
      )}
      {selectedPostId && !isCommentsPending && isFetching && (
        <p className="mt-2 text-xs text-gray-500">Refreshing…</p>
      )}
      {
        comments.map((comment: Comment) => (
          <ul key={comment.id} className="border-b my-3">
            <li>{comment.body}</li>
          </ul>
        ))
      }
    </div>
  )
}