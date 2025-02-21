import { Icons } from "@/components/common/Icons";
import { docsConfig } from "@/config/docs";
import { routeConfig } from "@/routes/config";

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
      title: routeConfig.dashboard.children.dataManagement.title,
      url: "#data-management",
      icon: routeConfig.dashboard.children.dataManagement.icon,
      isActive: true,
      items: Object.values(
        routeConfig.dashboard.children.dataManagement.children ?? {}
      ).map((item) => ({
        title: item.title,
        url: item.path,
      })),
    },
    {
      title: routeConfig.dashboard.children.dataAnalysis.title,
      url: "#data-analysis",
      icon: routeConfig.dashboard.children.dataAnalysis.icon,
      items: Object.values(
        routeConfig.dashboard.children.dataAnalysis.children ?? {}
      ).map((item) => ({
        title: item.title,
        url: item.path,
      })),
    },
  ],
  projects: routeConfig.projects,
};
