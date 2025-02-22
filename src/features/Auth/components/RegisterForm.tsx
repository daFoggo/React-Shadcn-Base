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
import { IRegisterFormProps } from "../types/RegisterForm";
import { registerFormSchema } from "../utils/constants";

const RegisterForm = ({ register }: IRegisterFormProps) => {
    const form = useForm<z.infer<typeof registerFormSchema>>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            email: "",
            username: "",
            confirmPassword: "",
            password: "",
        }
    });
    const navigate = useNavigate();

    const onSubmit = async (values: z.infer<typeof registerFormSchema>) => {
        const success = await register(values.email, values.username, values.password);
        if (success) {
            navigate(routeConfig.auth.children.login.path);
        }
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="font-bold text-2xl">Create a new account </h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Start a new journey with us
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
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Johndoe"
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
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm password</FormLabel>
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

                    <Button type="submit" className="w-full">
                        Register
                    </Button>
                </form>
            </Form>

            <div className="text-muted-foreground text-sm text-center">
                Already have an account?{" "}
                <Link to="/auth/login" className="hover:text-primary underline underline-offset-4 transition-colors">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default RegisterForm