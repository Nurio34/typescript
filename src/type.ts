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

//! "HANGMAN" type

export type Hangman = {
    word: string;
    charsToGuess: string[];
    partsDisplaying: string[];
    isGameOver: boolean;
    isWin: boolean;
};

//! -----------------
