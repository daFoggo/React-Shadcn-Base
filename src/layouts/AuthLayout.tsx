import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <div className="min-h-screen">
        <main>
          <Outlet />
        </main>
      </div>
      <Toaster />
    </>
  );
}

export default AuthLayout;
