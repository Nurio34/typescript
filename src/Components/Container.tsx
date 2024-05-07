import { Route, Routes } from "react-router-dom";
import HomePage from "../Projects/HomePage";
import MultistepForm from "../Projects/MultistepForm";

function Main() {
    const pages = [
        {
            path: "/typescript-basics",
            element: <HomePage />,
        },
        {
            path: "/typescript-basics/multistepform",
            element: <MultistepForm />,
        },
    ];

    return (
        <div className="Container min-h-screen bg-orange-100  pb-0 p-4 ">
            <Routes>
                {pages.map((page) => {
                    return (
                        <Route
                            key={page.path}
                            path={page.path}
                            element={page.element}
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default Main;
