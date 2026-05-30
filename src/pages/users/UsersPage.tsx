import {
  useUsers
} from '../../api/query.ts';
import {UserList} from '../../components/users/user-list/UserList.tsx';
import {Loader} from '../../components/loader/Loader.tsx';
import {PostsList} from '../../components/users/posts-list/PostsList.tsx';
import {
  CommentsList
} from '../../components/users/comments-list/CommnetsList.tsx';

export const UserPage = () => {

  const {data: users, isPending: isUsersPending, error: usersError} = useUsers();

  if (isUsersPending) return <Loader />

  if (usersError) return <p>Error fetching users.</p>;

  return (
    <div className="p-6 flex flex-col">
      <h1 className="text-black text-3xl font-bold text-left">Here's your happy
        users</h1>
      <article className="grid grid-cols-3 gap-3 mt-6">
        <aside>
          <h3 className="font-bold underline">Users list</h3>
          <UserList users={users} />
        </aside>
        <aside>
         <PostsList/>
        </aside>
        <aside>
          <CommentsList/>
        </aside>
      </article>
    </div>
    )
}