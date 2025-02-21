import { useBreadcrumb } from "@/contexts/BreadcrumbContext";
import { routeConfig } from "@/routes/config";
import { IBreadcrumbItem } from "@/types/BreadcrumbItem";
import { IRouteConfig } from "@/types/RouteConfig";
import { useEffect } from "react";
import { useLocation } from "react-router";

const findRouteConfig = (
  path: string,
  config: IRouteConfig = routeConfig.dashboard
): IRouteConfig | null => {
  if (config.path === path) return config;
  if (config.children) {
    for (const child of Object.values(config.children)) {
      const found = findRouteConfig(path, child);
      if (found) return found;
    }
  }
  return null;
};

export const useBreadcrumbUpdate = (): void => {
  const location = useLocation();
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    const pathWithoutDashboard = location.pathname.replace(/^\/dashboard/, "");
    const pathSegments = pathWithoutDashboard.split("/").filter(Boolean);

    const breadcrumbs: IBreadcrumbItem[] = pathSegments.reduce(
      (acc: IBreadcrumbItem[], segment: string, index: number) => {
        const path = `/dashboard/${pathSegments.slice(0, index + 1).join("/")}`;
        const config = findRouteConfig(path);

        if (config && config.title) {
          acc.push({
            title: config.title || segment,
            path: path,
            isPage: index === pathSegments.length - 1,
          });
        }

        return acc;
      },
      []
    );

    // Always add Dashboard as the first breadcrumb
    breadcrumbs.unshift({
      title: routeConfig.dashboard.title || "Dashboard",
      path: routeConfig.dashboard.path || "/dashboard",
      isPage: location.pathname === routeConfig.dashboard.path,
    });

    setBreadcrumbs(breadcrumbs);
  }, [location, setBreadcrumbs]);
};
