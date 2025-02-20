import { IBreadcrumbItem } from "./BreadcrumbItem";
export interface IBreadcrumbContext {
  breadcrumbs: IBreadcrumbItem[];
  setBreadcrumbs: (items: IBreadcrumbItem[]) => void;
  updateBreadcrumb: (path: string, newTitle: string) => void;
}
