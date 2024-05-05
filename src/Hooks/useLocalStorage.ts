import { type SignInType } from "../store/slices/signup";

type Types = SignInType;

export const useLocalStorage = (payload: Types, token?: string): void => {
    if (!token) {
        const localApp = localStorage.getItem("app");
        const localData = localApp ? JSON.parse(localApp) : [];
        const updatedLocalData = [...localData, { user: payload }];
        console.log(payload);
        localStorage.setItem("app", JSON.stringify(updatedLocalData));
        localStorage.setItem("user", JSON.stringify(payload.name));
    }
};
