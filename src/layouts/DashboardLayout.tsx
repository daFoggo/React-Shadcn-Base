import { BaseContextProvider } from "@/contexts/BaseContext";
import { Outlet } from "react-router";

export default function DashboardLayout() {
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
