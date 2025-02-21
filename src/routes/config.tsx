import { IRouteConfig } from "@/types/RouteConfig";
import {
  AreaChartIcon as ChartArea,
  Database,
  Frame,
  Map,
  PieChart,
} from "lucide-react";
import { lazy } from "react";

const Landing = lazy(() => import("@/pages/Landing"));
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const ForgotPassword = lazy(() => import("@/pages/ForgotPassword"));
const IdentificationData = lazy(() => import("@/pages/IdentificationData"));
const InstitueCalendarData = lazy(() => import("@/pages/InstitueCalendarData"));
const EventData = lazy(() => import("@/pages/EventData"));
const UserBehaviour = lazy(() => import("@/pages/UserBehaviour"));
const AppointmentsRequests = lazy(() => import("@/pages/AppointmentsRequests"));

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
        title: "Data Management",
        icon: Database,
        children: {
          identificationData: {
            path: "/dashboard/identification-data",
            element: IdentificationData,
            title: "Identification Data",
          },
          instituteCalendarData: {
            path: "/dashboard/institute-calendar-data",
            element: InstitueCalendarData,
            title: "Institute Calendar Data",
          },
          eventData: {
            path: "/dashboard/event-data",
            element: EventData,
            title: "Event Data",
          },
        },
      },
      dataAnalysis: {
        path: "#data-analysis",
        title: "Data Analysis",
        icon: ChartArea,
        children: {
          userBehaviour: {
            path: "/dashboard/user-behaviour",
            element: UserBehaviour,
            title: "User Behaviour",
          },
          appointmentRequests: {
            path: "/dashboard/appointment-requests",
            element: AppointmentsRequests,
            title: "Appointment Requests",
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
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};