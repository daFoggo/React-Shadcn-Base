import {
  NavItem,
  appConfig,
  navigationConfig,
  projectsConfig,
} from "@/routes/config";
import { type Location } from "react-router";

// Flatten the navigation tree for routing
export function getRoutes(): NavItem[] {
  const routes: NavItem[] = [];

  function traverseRoutes(items: Record<string, NavItem>) {
    Object.values(items).forEach((item) => {
      if (item.element) {
        routes.push(item);
      }

      if (item.children) {
        traverseRoutes(item.children);
      }
    });
  }

  traverseRoutes(navigationConfig);
  return routes;
}

// Get sidebar navigation items
export function getSidebarNavItems(): NavItem[] {
  const sidebarItems: NavItem[] = [];

  function traverseSidebar(items: Record<string, NavItem>) {
    Object.values(items).forEach((item) => {
      if (item.showInSidebar) {
        sidebarItems.push(item);
      }

      if (item.children) {
        traverseSidebar(item.children);
      }
    });
  }

  traverseSidebar(navigationConfig);
  return sidebarItems;
}

// Get navbar items
export function getNavbarItems(): NavItem[] {
  return Object.values(navigationConfig).filter((item) => item.showInNavbar);
}

// Get breadcrumb items based on current path
export function getBreadcrumbItems(location: Location): NavItem[] {
  const breadcrumbs: NavItem[] = [];
  const currentPath = location.pathname;

  function findBreadcrumbPath(
    items: Record<string, NavItem>,
    path: string
  ): boolean {
    for (const key in items) {
      const item = items[key];

      // Check if this is the current page
      if (item.path === path) {
        breadcrumbs.unshift(item);

        // If it has a parent, we need to add that too
        if (item.parent) {
          const parentKey = item.parent;
          const parent = findParentByKey(navigationConfig, parentKey);
          if (parent) {
            breadcrumbs.unshift(parent);

            // Continue up the chain if needed
            if (parent.parent) {
              findParentByKey(navigationConfig, parent.parent);
            }
          }
        }

        return true;
      }

      // Check children
      if (item.children && findBreadcrumbPath(item.children, path)) {
        breadcrumbs.unshift(item);
        return true;
      }
    }

    return false;
  }

  findBreadcrumbPath(navigationConfig, currentPath);
  return breadcrumbs.filter((item) => item.showInBreadcrumb !== false);
}

// Helper to find a parent by key
function findParentByKey(
  items: Record<string, NavItem>,
  key: string
): NavItem | null {
  for (const itemKey in items) {
    const item = items[itemKey];

    if (item.id === key) {
      return item;
    }

    if (item.children) {
      const found = findParentByKey(item.children, key);
      if (found) return found;
    }
  }

  return null;
}

// Format sidebar items for the sidebar component
export function formatSidebarItems() {
  const navMain = Object.values(navigationConfig.dashboard.children || {})
    .filter((item) => item.showInSidebar)
    .map((item) => ({
      title: item.title,
      url: item.path,
      icon: item.icon,
      isActive: true,
      items: Object.values(item.children || {})
        .filter((child) => child.showInSidebar)
        .map((child) => ({
          title: child.title,
          url: child.path,
        })),
    }));

  return {
    teams: [
      {
        name: appConfig.name,
        logo: appConfig.logo,
        plan: appConfig.plan || "Organization",
      },
    ],
    navMain,
    projects: projectsConfig,
  };
}
