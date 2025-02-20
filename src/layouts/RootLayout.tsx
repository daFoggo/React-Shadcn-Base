import RootFooter from "@/components/layout/RootFooter";
import RootHeader from "@/components/layout/RootHeader";
import { BaseContextProvider } from "@/contexts/BaseContext";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <BaseContextProvider>
      <div className="flex flex-1 flex-col">
        <RootHeader />
        <main className="flex flex-1 flex-col">
          <Outlet />
        </main>
        <RootFooter />
      </div>
    </BaseContextProvider>
  );
}

export default RootLayout;