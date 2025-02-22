import { z } from "zod";

export const loginFormSchema = z.object({
  username: z
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

export const registerFormSchema = z.object({
  email: z
    .string()
    .email({
      message: "Invalid email",
    })
    .min(1, {
      message: "Email is required",
    })
    .max(50, {
      message: "Email cannot be longer than 50 characters",
    }),
  username: z
    .string()
    .min(1, {
      message: "Username is required",
    })
    .max(50, {
      message: "Username cannot be longer than 50 characters",
    }),
  password: z
    .string()
    .min(6, {
      message: "Password is required an should be at least 6 characters",
    })
    .max(50, {
      message: "Password cannot be longer than 50 characters",
    }),
  confirmPassword: z
    .string()
    .min(6, {
      message: "Password is required an should be at least 6 characters",
    })
    .max(50, {
      message: "Password cannot be longer than 50 characters",
    }),
});

export const forgotPasswordFormSchema = z.object({
  email: z
    .string()
    .email({
      message: "Invalid email",
    })
    .min(1, {
      message: "Email is required",
    })
    .max(50, {
      message: "Email cannot be longer than 50 characters",
    }),
});
