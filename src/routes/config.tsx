import { IRouteConfig } from "@/types/RouteConfig";
import {
  AreaChartIcon as ChartArea,
  Database,
  Frame
} from "lucide-react";
import { lazy } from "react";

const Landing = lazy(() => import("@/pages/Landing"));
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const ForgotPassword = lazy(() => import("@/pages/ForgotPassword"));
const IdentificationData = lazy(() => import("@/pages/IdentificationData"));
const InstitueCalendarData = lazy(() => import("@/pages/InstitueCalendarData"));
const UserBehaviourStatistics = lazy(() => import("@/pages/UserBehaviourStatistics"));

export const routeConfig: IRouteConfig = {
  root: {
    path: "/",
    element: Landing,
  },
  auth: {
    path: "/auth",
    children: {
      login: {
        path: "/auth/login",
        element: Login,
        title: "Login",
      },
      register: {
        path: "/auth/register",
        element: Register,
        title: "Register",
      },
      forgotPassword: {
        path: "/auth/forgot-password",
        element: ForgotPassword,
        title: "Forgot Password",
      },
    },
  },
  dashboard: {
    path: "/dashboard",
    title: "Dashboard",
    children: {
      dataManagement: {
        path: "#data-management",
        title: "Data management",
        icon: Database,
        children: {
          identificationData: {
            path: "/dashboard/identification-data",
            element: IdentificationData,
            title: "Identification",
          },
          instituteCalendarData: {
            path: "/dashboard/institute-calendar-data",
            element: InstitueCalendarData,
            title: "Institute Calendar",
          },
        },
      },
      dataAnalysis: {
        path: "#data-analysis",
        title: "Data analysis",
        icon: ChartArea,
        children: {
          userBehaviourStatistics: {
            path: "/dashboard/user-behaviour",
            element: UserBehaviourStatistics,
            title: "User Behaviour",
          },
        },
      },
    },
  },
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
  ],
};