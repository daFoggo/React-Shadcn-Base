import { LucideIcon } from "lucide-react"

export interface ISidebarNavItem {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  items?: {
    title: string
    url: string
  }[]
}