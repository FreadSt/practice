import {Sidebar} from './components/sidebar/Sidebar.tsx';
import {NAV_LINKS} from './constants/nav-links';
import {Outlet} from 'react-router-dom';
import {RouterProvider} from './app/providers/router.tsx';
import {useAuth0} from '@auth0/auth0-react';
import {Loader} from './components/loader/Loader.tsx';
import {AuthenticationPage} from './pages/auth/AuthenticationPage.tsx';


export const Layout = () => {
  const { isAuthenticated, isLoading, error } = useAuth0();

  if (isLoading) return <Loader />

  if (error) {
    return (
      <div className="app-container">
        <div className="error-state">
          <div className="error-title">Oops!</div>
          <div className="error-message">Something went wrong</div>
          <div className="error-sub-message">{error.message}</div>
        </div>
      </div>
    );
  }

  return(
    <>
      {
        isAuthenticated ?
          <div className="grid grid-cols-[auto_1fr]">
            <Sidebar links={NAV_LINKS}/>
            <main className="h-full bg-amber-50 max-w-[calc(100%)]">
              <Outlet/>
              <RouterProvider/>
            </main>
          </div>
          :
          <AuthenticationPage />
      }

    </>
  )
}