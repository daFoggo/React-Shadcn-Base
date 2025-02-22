import RootFooter from "@/components/layout/RootFooter";
import RootHeader from "@/components/layout/RootHeader";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <div className="flex flex-col flex-1">
        <RootHeader />
        <main className="flex flex-col flex-1">
          <Outlet />
        </main>
        <RootFooter />
      </div>
      <Toaster />
    </>
  );
}

export default RootLayout;