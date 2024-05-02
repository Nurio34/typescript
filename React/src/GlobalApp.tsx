import { createContext, useContext } from "react";

const GlobalContext = createContext<State | undefined>(undefined);

function GlobalApp({ children }: { children: React.ReactNode }) {
    return (
        <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
    );
}

export default GlobalApp;

export function useGlobaContext() {
    const context = useContext(GlobalContext);

    if (context === undefined) {
        throw new Error(
            "You must use useGlobalContext within GlobalContext.Provider",
        );
    }

    return context;
}
