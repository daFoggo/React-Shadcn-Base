import { useBreadcrumb } from "@/contexts/BreadcrumbContext";
import { routeConfig } from "@/routes/config";
import { useEffect } from "react";
import { useLocation } from "react-router";

export const useBreadcrumbUpdate = () => {
  const location = useLocation();
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    const pathWithoutDashboard = location.pathname.replace(/^\/dashboard/, "");
    const pathSegments = pathWithoutDashboard.split("/").filter(Boolean);

    const breadcrumbs = pathSegments.map((segment, index) => {
      const configPath = "/" + pathSegments.slice(0, index + 1).join("/");
      const fullPath = "/dashboard" + configPath;

      const config = routeConfig[configPath];

      return {
        title: config?.title || segment,
        path: fullPath,
        isPage: index === pathSegments.length - 1,
      };
    });

    breadcrumbs.unshift({
      title: "Dashboard",
      path: "/dashboard",
      isPage: location.pathname === "/dashboard",
    });

    setBreadcrumbs(breadcrumbs);
  }, [location, setBreadcrumbs]);
};
