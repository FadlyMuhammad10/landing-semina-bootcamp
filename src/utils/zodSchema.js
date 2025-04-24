import { z } from "zod";

export const signUpSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required" }),
  last_name: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const signInSchema = signUpSchema.omit({
  first_name: true,
  last_name: true,
});

export const checkoutSchema = signUpSchema.omit({
  password: true,
});

export const otpSchema = z.object({
  otp: z.string().min(1, { message: "OTP is required" }),
});
