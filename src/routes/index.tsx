import ProtectedRoute from "@/components/layout/ProtectedRoute";
import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import RootLayout from "@/layouts/RootLayout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const Landing = lazy(() => import("@/pages/Landing"));
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const ForgotPassword = lazy(() => import("@/pages/ForgotPassword"))
const IdentificationData = lazy(() => import("@/pages/IdentificationData"));
const InstitueCalendarData = lazy(() => import("@/pages/InstitueCalendarData"));
const EventData = lazy(() => import("@/pages/EventData"));
const UserBehaviour = lazy(() => import("@/pages/UserBehaviour"));
const AppointmentsRequests = lazy(() => import("@/pages/AppointmentsRequests"));

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      }
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "identification-data",
        element: <IdentificationData />,
      },
      {
        path: "institue-calendar-data",
        element: <InstitueCalendarData />,
      },
      {
        path: "event-data",
        element: <EventData />,
      },
      {
        path: "user-behaviour",
        element: <UserBehaviour />,
      },
      {
        path: "appointment-requests",
        element: <AppointmentsRequests />,
      }
    ],
  },
];

export const router = createBrowserRouter(routes);
