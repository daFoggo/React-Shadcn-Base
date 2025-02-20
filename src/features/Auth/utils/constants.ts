import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .max(50, {
      message: "Email cannot be longer than 50 characters",
    }),
  password: z
    .string()
    .min(6, {
      message: "Password is required an should be at least 6 characters",
    })
    .max(50, {
      message: "Password cannot be longer than 50 characters",
    }),
});

export const registerFormSchema = z
  .object({
    email: z
      .string()
      .min(1, {
        message: "Email is required",
      })
      .max(50, {
        message: "Email cannot be longer than 50 characters",
      }),
    username: z
      .string()
      .min(1, {
        message: "User name is required",
      })
      .max(30, {
        message: "User name cannot be longer than 30 characters",
      }),
    password: z
      .string()
      .min(6, {
        message: "Password is required and should be at least 6 characters",
      })
      .max(50, {
        message: "Password cannot be longer than 50 characters",
      }),
    confirmPassword: z
      .string()
      .min(6, {
        message: "Please confirm your password",
      })
      .max(50, {
        message: "Password confirmation cannot be longer than 50 characters",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const forgotPasswordFormSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .max(50, {
      message: "Email cannot be longer than 50 characters",
    }),
});
