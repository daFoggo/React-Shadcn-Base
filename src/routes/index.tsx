import ProtectedRoute from "@/components/layout/ProtectedRoute";
import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import RootLayout from "@/layouts/RootLayout";
import { IBaseRoute } from "@/types/RouteConfig";
import { createBrowserRouter, Navigate } from "react-router";
import { navigationConfig } from "./config";

const createRoutes = (config: IBaseRoute) => {
  const routes = [];

  if (config.path && config.element) {
    routes.push({
      path: config.path,
      element: <config.element />,
    });
  }

  if (config.children) {
    Object.values(config.children).forEach((child) => {
      routes.push(...createRoutes(child as IBaseRoute));
    });
  }

  return routes;
};

const rootRoutes = [
  {
    path: navigationConfig.root.path,
    element: <RootLayout />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        index: true,
        element: navigationConfig.root.element ? <navigationConfig.root.element /> : null,
      },
    ],
  },
  {
    path: navigationConfig.auth.path,
    element: <AuthLayout />,
    children: createRoutes(navigationConfig.auth),
  },
  {
    path: navigationConfig.dashboard.path,
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={Object.values(navigationConfig.dashboard.children?.dataManagement?.children || {})[0]?.path || '/'} replace />,
      },
      ...createRoutes(navigationConfig.dashboard),
    ],
  },
];

export const router = createBrowserRouter(rootRoutes);