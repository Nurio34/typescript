import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { z } from "zod";

const FormSchema = z.object({
    isOpen: z.boolean(),
    isSignUpForm: z.boolean(),
});

type Form = z.infer<typeof FormSchema>;

const initialState: Form = {
    isOpen: false,
    isSignUpForm: false,
};

export const form = createSlice({
    name: "form",
    initialState,
    reducers: {
        toggleForm: (state, actions: PayloadAction<boolean>) => {
            state.isOpen = actions.payload;
        },
        toggleIsSignUp: (state, actions: PayloadAction<boolean>) => {
            state.isSignUpForm = actions.payload;
        },
    },
});

export const { toggleForm, toggleIsSignUp } = form.actions;
export default form.reducer;
