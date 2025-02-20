import DynamicBreadcrumb from '@/components/common/DynamicBreadcrumb';
import DashboardSidebar from '@/components/layout/DashboardSidebar';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { BaseContextProvider } from '@/contexts/BaseContext';
import { BreadcrumbProvider } from '@/contexts/BreadcrumbContext';
import { useBreadcrumbUpdate } from '@/features/BaseFeature/hooks/useBreadcrumbUpdate';
import { Outlet } from 'react-router';

const DashboardContent = () => {
  useBreadcrumbUpdate();

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <DynamicBreadcrumb />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

const DashboardLayout = () => {
  return (
    <BaseContextProvider>
      <BreadcrumbProvider>
        <DashboardContent />
      </BreadcrumbProvider>
    </BaseContextProvider>
  );
};

export default DashboardLayout;