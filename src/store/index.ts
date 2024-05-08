import { configureStore } from "@reduxjs/toolkit";
import hangmanReducer from "./slices/hangman";
import notesReducer from "./slices/notes";

export const store = configureStore({
    reducer: {
        hangman: hangmanReducer,
        notes: notesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
