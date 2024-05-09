import { Route, Routes } from "react-router-dom";
import HomePage from "../Projects/HomePage";
import Hangman from "../Projects/Hangman";

function Main() {
    const pages = [
        {
            path: "/typescript-basics",
            element: <HomePage />,
        },
        {
            path: "/typescript-basics/hangman",
            element: <Hangman />,
        },
    ];

    return (
        <div className="Container min-h-screen pb-0 p-4 ">
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
