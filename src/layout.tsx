import {Sidebar} from './components/sidebar/Sidebar.tsx';
import {NAV_LINKS} from './constants/nav-links';
import {Outlet} from 'react-router-dom';

export const Layout = () => {

  return(
    <div className="grid grid-cols-[auto_1fr]">
      <Sidebar links={NAV_LINKS}/>
      <main className="h-full bg-amber-50 max-w-[calc(100%)]">
        <Outlet/>
      </main>
    </div>
  )
}