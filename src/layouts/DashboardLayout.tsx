import DynamicBreadcrumb from '@/components/common/DynamicBreadcrumb';
import DashboardSidebar from '@/components/layout/DashboardSidebar';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/toaster';
import { BreadcrumbProvider } from '@/contexts/BreadcrumbContext';
import { useBreadcrumbUpdate } from '@/hooks/useBreadcrumbUpdate';
import { Outlet } from 'react-router';

const DashboardContent = () => {
  useBreadcrumbUpdate();

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <header className="group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 flex items-center gap-2 h-16 transition-[width,height] ease-linear shrink-0">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4" />
            <DynamicBreadcrumb />
          </div>
        </header>
        <div className="flex flex-col flex-1 gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

const DashboardLayout = () => {
  return (
    <>
      <BreadcrumbProvider>
        <DashboardContent />
      </BreadcrumbProvider>
      <Toaster />
    </>
  );
};

export default DashboardLayout;