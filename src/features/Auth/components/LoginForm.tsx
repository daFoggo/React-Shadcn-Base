import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { routeConfig } from "@/routes/config";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { z } from "zod";
import { ILoginFormProps } from "../types/LoginForm";
import { loginFormSchema } from "../utils/constants";
import { Icons } from "@/components/common/Icons";

const LoginForm = ({ login, loadingAPI }: ILoginFormProps) => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    }
  });
  const navigate = useNavigate();

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    const success = await login(values.username, values.password);
    if (success) {
      navigate(routeConfig.dashboard.path);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="font-bold text-2xl">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your infos below to login to your account
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="gap-6 grid">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jonh Doe"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <FormLabel>Password</FormLabel>
                  <Link
                    to={routeConfig.auth.children.forgotPassword.path}
                    className="ml-auto text-muted-foreground text-sm hover:underline underline-offset-4"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={loadingAPI}>
            Login
          </Button>

          <div className="after:top-1/2 after:z-0 after:absolute relative after:inset-0 after:flex after:items-center after:border-t after:border-border text-sm text-center">
            <span className="z-10 relative bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>

          <Button type="button" variant="outline" className="w-full">
            <Icons.gitHub className="size-4" />
            Login with GitHub
          </Button>
        </form>
      </Form>

      <div className="text-muted-foreground text-sm text-center">
        Don&apos;t have an account?{" "}
        <Link to="/auth/register" className="hover:text-primary underline underline-offset-4 transition-colors">
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginForm