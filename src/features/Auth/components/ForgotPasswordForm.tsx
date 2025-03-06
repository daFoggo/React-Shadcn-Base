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
import { Link, useNavigate } from "react-router";
import { z } from "zod";
import { IForgotPasswordFormProps } from "../types/ForgotPasswordForm";
import { forgotPasswordFormSchema } from "../utils/constants";
import {  navigationConfig } from "@/routes/config";


const ForgotPassword = (
    { forgotPassword }: IForgotPasswordFormProps
) => {
    const form = useForm<z.infer<typeof forgotPasswordFormSchema>>({
        resolver: zodResolver(forgotPasswordFormSchema),
        defaultValues: {
            email: "",
        }
    });
    const navigate = useNavigate();

    const onSubmit = async (values: z.infer<typeof forgotPasswordFormSchema>) => {
        const success = await forgotPassword(values.email);
        if (success) {
            navigate(navigationConfig.auth.children?.login.path ?? '/auth/login');
        }
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="font-bold text-2xl">Forgot your password?</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    No worries, we'll send you reset instructions
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="gap-6 grid">
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

            <div className="flex justify-center items-center gap-2 text-muted-foreground text-sm text-center">
                <ArrowLeft className="size-3" />
                <Link to="/auth/login" className="hover:text-primary transition-colors">
                    Back to login
                </Link>
            </div>
        </div>
    )
}

export default ForgotPassword