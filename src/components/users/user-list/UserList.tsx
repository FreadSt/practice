import {useSelectedPost, useSelectedUser} from '../../../app/store/users.ts';

interface User {
  id: number;
  email: string;
  name: string;
}

interface UsersList {
  users: User[];
}

export const UserList = ({users} : UsersList) => {
  const selectUserById = useSelectedUser(
    (state) => state.selectId)
  const selectPostId = useSelectedPost((state) => state.selectPostId)

  const handleClickUser = (id: number) => {
    selectUserById(id)
    selectPostId(null)
  }

  return (
    <div className="mt-3 flex flex-col gap-3">
      {users.map((user: User) => (
        <div key={user.id}>
          <button
            onClick={() => handleClickUser(user.id)}
            className="
                      text-left rounded-md px-3 py-2 cursor-pointer
                      transition duration-150 ease-out
                      hover:underline hover:scale-[1.02]
                      focus:outline-none
                      focus:bg-slate-100 focus:shadow-sm
                      focus-visible:bg-slate-100 focus-visible:shadow-sm
                    "
          >{user.name}</button>
        </div>
      ))}
    </div>
  )
}