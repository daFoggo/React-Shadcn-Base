import { Icons } from "@/components/common/Icons";
import { docsConfig } from "@/config/docs";
import { routeConfig } from "@/routes/config";
import { ISidebarNavItem } from "@/types/Sidebar";

export const SIDEBAR_ROUTING = {
  teams: [
    {
      name: docsConfig.websiteName,
      logo: Icons.logo,
      plan: "Organization",
    },
  ],
  navMain: [
    {
      title:
        routeConfig.dashboard.children?.dataManagement.title ||
        "Data Management",
      url: "#data-management",
      icon: routeConfig.dashboard.children?.dataManagement.icon,
      isActive: true,
      items: Object.values(
        routeConfig.dashboard.children?.dataManagement.children || {}
      ).map((item) => ({
        title: item.title || "",
        url: item.path,
      })),
    },
    {
      title:
        routeConfig.dashboard.children?.dataAnalysis.title || "Data Analysis",
      url: "#data-analysis",
      icon: routeConfig.dashboard.children?.dataAnalysis.icon,
      isActive: true,
      items: Object.values(
        routeConfig.dashboard.children?.dataAnalysis.children || {}
      ).map((item) => ({
        title: item.title || "",
        url: item.path,
      })),
    },
  ] satisfies ISidebarNavItem[],
  projects: routeConfig.projects,
};
