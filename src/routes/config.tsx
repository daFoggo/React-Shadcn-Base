import { Icons } from '@/components/common/Icons'
import { IAppConfig, INavItem, IProject } from '@/types/NavigationConfig'
import { AreaChartIcon, Database, Frame } from 'lucide-react'
import { lazy } from "react"

const Landing = lazy(() => import("@/pages/Home"))
const Login = lazy(() => import("@/pages/Login"))
const Register = lazy(() => import("@/pages/Register"))
const ForgotPassword = lazy(() => import("@/pages/ForgotPassword"))
const IdentificationData = lazy(() => import("@/pages/IdentificationData"))
const InstitueCalendarData = lazy(() => import("@/pages/InstitueCalendarData"))
const UserBehaviourStatistics = lazy(() => import("@/pages/UserBehaviourStatistics"))
const AppointmentsRequestStatistics = lazy(() => import("@/pages/AppointmentsRequestStatistics"))

export const appConfig: IAppConfig = {
  name: "React Shadcn Base",
  logo: Icons.logo,
  plan: "Organization",
  authorName: "daFoggo",
  authorUrl: "https://github.com/daFoggo",
  projectUrl: "https://github.com/daFoggo",
}

export const navigationConfig: Record<string, INavItem> = {
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

export const projectsConfig: IProject[] = [
  {
    name: "Design Engineering",
    url: "#",
    icon: Frame
  }
]