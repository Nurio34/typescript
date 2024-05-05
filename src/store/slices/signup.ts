import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { z } from "zod";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

export const SignUpSchema = z.object({
    id: z.number(),
    name: z
        .string()
        .min(5, { message: "Must be 5 or more characters long" })
        .trim(),
    email: z.string().email({ message: "Invalid email address" }).trim(),
    password: z
        .string()
        .min(8, { message: "Must be 8 or more characters long" })
        .trim(),
});

export const SignInSchema = z.object({
    name: z.string().min(5).trim(),
    password: z.string().trim(),
});

export type SignUpType = z.infer<typeof SignUpSchema>;
export type SignInType = z.infer<typeof SignInSchema>;

const initialState: SignUpType = {
    id: NaN,
    name: "",
    email: "",
    password: "",
};

export const signup = createSlice({
    name: "signup",
    initialState,
    reducers: {
        signUp: (state, actions: PayloadAction<SignUpType>) => {
            useLocalStorage(actions.payload);
        },
        signIn: (state, actions: PayloadAction<SignInType>) => {},
    },
});

export const { signUp, signIn } = signup.actions;
export default signup.reducer;
