import {Link} from 'react-router-dom'
import {useState} from 'react'
import type {SidebarProps, LinkItem} from './types.ts';

export const Sidebar = ({links} : SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev)
  }

  return(
    <section
      className={`
        flex flex-col p-4 min-h-[calc(100vh-26px)] bg-blue-300
        transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-16' : 'w-56'}
      `}
    >
      <button
        className={`text-black text-2xl cursor-pointer ${isCollapsed ? 'self-center' : 'self-end px-4'} transition-opacity duration-300`}
        onClick={toggleSidebar}
      >
        {isCollapsed ? '☰' : '✕'}
      </button>

      <div className="flex flex-col gap-3">
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
    </section>
  )
}