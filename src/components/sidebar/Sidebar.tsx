import {Link} from 'react-router-dom'
import {useState} from 'react'
import type {SidebarProps, LinkItem} from './types.ts';
import {LogOutIcon} from 'lucide-react';
import {useAuth0} from '@auth0/auth0-react';

export const Sidebar = ({links} : SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const {logout: auth0Logout} = useAuth0();
  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev)
  }
  const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });

  return(
    <section
      className={`
        flex flex-col p-4 min-h-[calc(100vh-26px)] bg-blue-300
        transition-all duration-300 ease-in-out
        justify-between
        ${isCollapsed ? 'w-16' : 'w-56'}
      `}
    >
      <button
        className={`text-black text-2xl cursor-pointer ${isCollapsed ? 'self-center' : 'self-end px-4'} transition-opacity duration-300`}
        onClick={toggleSidebar}
      >
        {isCollapsed ? '☰' : '✕'}
      </button>

      <div className="flex flex-col gap-6">
        {links.map((link: LinkItem) => (
          <Link
            to={link.path}
            key={link.path}
            className={`text-black hover:scale-105 hover:transition-opacity-70 ${isCollapsed && 'hidden'} flex items-center gap-4`}
          >
            <link.icon/>
            <h4 className="font-bold border border-transparent">{link.name}</h4>
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <button onClick={logout}
                className="
                  group
                  cursor-pointer
                  rounded-2xl
                  p-3 bg-black-200
                  text-black
                  hover:text-white
                  hover:bg-black flex items-center justify-center gap-3
                  transition-all duration-300 ease-in-out"
        >
          <LogOutIcon/>
          <p className="font-medium">Log Out</p>
        </button>
      </div>
    </section>
  )
}