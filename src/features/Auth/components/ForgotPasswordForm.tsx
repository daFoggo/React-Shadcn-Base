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
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { z } from "zod";
import { IForgotFormProps } from "../types/ForgotPasswordForm";
import { forgotPasswordFormSchema } from "../utils/constants";

const ForgotPassword = (
  { forgotPassword }: IForgotFormProps
) => {
  const form = useForm<z.infer<typeof forgotPasswordFormSchema>>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    }
  });

  const onSubmit = (values: z.infer<typeof forgotPasswordFormSchema>) => {
    console.log(values);
    forgotPassword();
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Forgot your password?</h1>
        <p className="text-balance text-sm text-muted-foreground">
          No worries, we'll send you reset instructions
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="email@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Reset password
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm flex items-center justify-center text-muted-foreground gap-2">
        <ArrowLeft className="size-3" />
        <Link to="/auth/login" className="hover:text-primary transition-colors">
          Back to login
        </Link>
      </div>
    </div>
  )
}

export default ForgotPassword