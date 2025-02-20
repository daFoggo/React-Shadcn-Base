import { BaseContextProvider } from "@/contexts/BaseContext";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <BaseContextProvider>
      <div className="min-h-screen">
        <main>
          <Outlet />
        </main>
      </div>
    </BaseContextProvider>
  );
}

export default DashboardLayout;