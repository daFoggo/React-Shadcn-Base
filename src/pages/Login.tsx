
import { Icons } from "@/components/common/Icons";
import { docsConfig } from "@/config/docs";
import { useAuth } from "@/contexts/AuthContext";
import LoginForm from "@/features/Auth/components/LoginForm";
import { Link } from "react-router";

const Login = () => {

  const { login } = useAuth();
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 font-bold">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground" >
              <Icons.logo className="size-4" />
            </div>
            {docsConfig.websiteName}
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm login={login} />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default Login;
