import {Loader} from '../../loader/Loader.tsx';
import {useCommentsByPostId} from '../../../api/query.ts';
import {useSelectedPost} from '../../../app/store/users.ts';

interface Comment{
  id: number
  body: string
}

export const CommentsList = () => {
  const selectedPostId = useSelectedPost((state) => state.selectedPostId)

  const {data: comments = [], isPending: isCommentsPending} = useCommentsByPostId(selectedPostId as number);

  return(
    <div>
      <h3 className="font-bold underline">Comments of post</h3>
      {selectedPostId && isCommentsPending && <Loader/>}
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