
import { Icons } from "@/components/common/Icons";
import { docsConfig } from "@/config/docs";
import { useAuth } from "@/contexts/AuthContext";
import LoginForm from "@/features/Auth/components/LoginForm";
import { Link } from "react-router";

const Login = () => {
  const { login, loadingAPI } = useAuth();
  return (
    <div className="grid lg:grid-cols-2 min-h-svh">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center md:justify-start gap-2">
          <Link to="/" className="flex items-center gap-2 font-bold">
            <div className="flex justify-center items-center bg-muted rounded-md w-6 h-6 text-muted-foreground" >
              <Icons.logo className="size-4" />
            </div>
            {docsConfig.websiteName}
          </Link>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <div className="w-full max-w-xs">
            <LoginForm login={login} loadingAPI={loadingAPI} />
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative bg-muted">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 dark:brightness-[0.2] dark:grayscale w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
