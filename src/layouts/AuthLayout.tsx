import { BaseContextProvider } from "@/contexts/BaseContext";
import { Outlet } from "react-router";

const AuthLayout = () => {
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

export default AuthLayout;
