import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todo";
import signupReducer from "./slices/signup";
import formReducer from "./slices/form";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        signup: signupReducer,
        form: formReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
