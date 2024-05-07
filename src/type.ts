import { z } from "zod";

//! "SIGN UP" validation
export const SignUpSchema = z.object({
    id: z.number(),
    username: z
        .string()
        .min(5, { message: "Must be 5 or more characters long" })
        .trim(),
    email: z.string().email({ message: "Invalid email address" }).trim(),
    password: z
        .string()
        .min(8, { message: "Must be 8 or more characters long" })
        .trim(),
});
export type SignUpType = z.infer<typeof SignUpSchema>;

//! -----------------

//! "SIGN IN" validation
export const SignInSchema = z.object({
    username: z.string().min(5).trim(),
    password: z.string().trim(),
});
export type SignInType = z.infer<typeof SignInSchema>;

//! -----------------

//! "USER" validation
export type User = {
    username: string;
};
//! -------------

//! "TODO" validation
export type Todo = {
    token: string;
    id: number;
    todo: string;
    completed: boolean;
};
//! -------------

//! "APP" validation
export type App = {
    user: SignUpType;
};

//! -----------
