import {Route, Routes} from 'react-router-dom';
import {Homepage} from '../../pages/home/Homepage.tsx';
import {NotFoundPage} from '../../pages/404/NotFoundPage.tsx';
import {AuthenticationPage} from '../../pages/auth/AuthenticationPage.tsx';
import {UserPage} from '../../pages/users/UsersPage.tsx';

export const RouterProvider = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/users" element={<UserPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
        <Route path="/auth" element={<AuthenticationPage/>} />
      </Routes>
    </>
  )
}