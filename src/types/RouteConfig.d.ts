export interface IBaseRoute {
  path: string;
  title?: string;
  element?: ComponentType<any>;
  icon?: ComponentType<any>;
  children?: Record<string, Route>;
}


export interface IRouteGroup {
  name: string;
  url: string;
  icon?: ComponentType<any>;
}

type Route = IBaseRoute | IRouteGroup;

export interface IRouteConfig {
  root: IBaseRoute;
  auth: {
    path: string;
    children: Record<string, IBaseRoute>;
  };
  dashboard: {
    path: string;
    title: string;
    children: Record<
      string,
      IBaseRoute & { children?: Record<string, IBaseRoute> }
    >;
  };
  projects: IRouteGroup[];
}
