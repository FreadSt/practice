import {
  ContactIcon,
  HomeIcon,
  LayoutDashboard, LogInIcon,
  type LucideIcon, UserIcon
} from 'lucide-react';

interface Link {
  name: string
  path: string
  icon: LucideIcon
}

export const NAV_LINKS: Link[] = [
  { name: "Home", path: "/", icon: HomeIcon },
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Contact", path: "/contact", icon: ContactIcon },
  { name: "Users", path: "/users", icon: UserIcon },
  { name: "Auth", path: "/auth", icon: LogInIcon },
];