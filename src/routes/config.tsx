import { Icons } from '@/components/common/Icons'
import { AreaChartIcon, Database, Frame, type LucideIcon } from 'lucide-react'
import { lazy, type ReactNode } from "react"

const Landing = lazy(() => import("@/pages/Landing"))
const Login = lazy(() => import("@/pages/Login"))
const Register = lazy(() => import("@/pages/Register"))
const ForgotPassword = lazy(() => import("@/pages/ForgotPassword"))
const IdentificationData = lazy(() => import("@/pages/IdentificationData"))
const InstitueCalendarData = lazy(() => import("@/pages/InstitueCalendarData"))
const UserBehaviourStatistics = lazy(() => import("@/pages/UserBehaviourStatistics"))
const AppointmentsRequestStatistics = lazy(() => import("@/pages/AppointmentsRequestStatistics"))

export interface NavItem {
  id: string
  title: string
  path: string
  element?: React.LazyExoticComponent<() => JSX.Element> | (() => ReactNode)
  icon?: LucideIcon
  children?: Record<string, NavItem>
  isExternal?: boolean
  showInSidebar?: boolean
  showInNavbar?: boolean
  showInBreadcrumb?: boolean
  parent?: string
}

export interface Project {
  name: string
  url: string
  icon: LucideIcon
}

export interface AppConfig {
  name: string
  logo: React.ElementType
  plan?: string
}

export const appConfig: AppConfig = {
  name: "React Shadcn Base",
  logo: Icons.logo,
  plan: "Organization"
}

export const navigationConfig: Record<string, NavItem> = {
  root: {
    id: "root",
    title: "Home",
    path: "/",
    element: Landing,
    showInNavbar: true,
    showInSidebar: false,
    showInBreadcrumb: false
  },

  auth: {
    id: "auth",
    title: "Authentication",
    path: "/auth",
    showInSidebar: false,
    showInNavbar: false,
    children: {
      login: {
        id: "login",
        title: "Login",
        path: "/auth/login",
        element: Login,
        parent: "auth"
      },
      register: {
        id: "register",
        title: "Register",
        path: "/auth/register",
        element: Register,
        parent: "auth"
      },
      forgotPassword: {
        id: "forgotPassword",
        title: "Forgot Password",
        path: "/auth/forgot-password",
        element: ForgotPassword,
        parent: "auth"
      }
    }
  },

  dashboard: {
    id: "dashboard",
    title: "Dashboard",
    path: "/dashboard",
    showInNavbar: true,
    showInSidebar: true,
    children: {
      dataManagement: {
        id: "dataManagement",
        title: "Data Management",
        path: "#data-management",
        icon: Database,
        showInSidebar: true,
        parent: "dashboard",
        children: {
          identificationData: {
            id: "identificationData",
            title: "Identification",
            path: "/dashboard/identification-data",
            element: IdentificationData,
            parent: "dataManagement",
            showInSidebar: true,
            showInBreadcrumb: true
          },
          instituteCalendarData: {
            id: "instituteCalendarData",
            title: "Institute Calendar",
            path: "/dashboard/institute-calendar-data",
            element: InstitueCalendarData,
            parent: "dataManagement",
            showInSidebar: true,
            showInBreadcrumb: true
          }
        }
      },
      dataAnalysis: {
        id: "dataAnalysis",
        title: "Data Analysis",
        path: "#data-analysis",
        icon: AreaChartIcon,
        showInSidebar: true,
        parent: "dashboard",
        children: {
          userBehaviourStatistics: {
            id: "userBehaviourStatistics",
            title: "User Behaviour",
            path: "/dashboard/user-behaviour",
            element: UserBehaviourStatistics,
            parent: "dataAnalysis",
            showInSidebar: true,
            showInBreadcrumb: true
          },
          appointmentRequestsStatistics: {
            id: "appointmentRequestsStatistics",
            title: "Appointment Requests",
            path: "/dashboard/appointment-requests",
            element: AppointmentsRequestStatistics,
            parent: "dataAnalysis",
            showInSidebar: true,
            showInBreadcrumb: true
          }
        }
      }
    }
  }
}

export const projectsConfig: Project[] = [
  {
    name: "Design Engineering",
    url: "#",
    icon: Frame
  }
]