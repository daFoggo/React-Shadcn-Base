export interface INavItem {
  id: string;
  title: string;
  path: string;
  element?: React.LazyExoticComponent<() => JSX.Element> | (() => ReactNode);
  icon?: LucideIcon;
  children?: Record<string, INavItem>;
  isExternal?: boolean;
  showInSidebar?: boolean;
  showInNavbar?: boolean;
  showInBreadcrumb?: boolean;
  parent?: string;
}

export interface IProject {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface IAppConfig {
  name: string;
  logo: React.ElementType;
  plan?: string;
  authorName: string;
  authorUrl: string;
  projectUrl: string;
}
