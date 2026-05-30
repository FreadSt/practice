import type {LucideIcon} from 'lucide-react';

export type LinkItem = {
  name: string
  path: string
  icon: LucideIcon
}

export type SidebarProps = {
  links: LinkItem[]
}