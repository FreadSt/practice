import {Route, Routes} from 'react-router-dom';
import {Homepage} from '../../pages/home/Homepage.tsx';
import {NotFoundPage} from '../../pages/404/NotFoundPage.tsx';
import {AuthenticationPage} from '../../pages/auth/AuthenticationPage.tsx';
import {UserPage} from '../../pages/users/UsersPage.tsx';
import {Layout} from '../../layout.tsx';
import {ProtectedRoute} from './ProtectedRoute';

export const RouterProvider = () => {
  return(
    <>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Homepage />} />
          <Route path="users" element={<UserPage />} />
        </Route>

        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}