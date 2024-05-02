import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import GlobalApp from "./GlobalApp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalApp>
            <App />
        </GlobalApp>
    </React.StrictMode>,
);
