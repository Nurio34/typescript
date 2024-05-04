import { Route, Routes, useLocation } from "react-router-dom";
import TodoApp from "../Projects/TodoApp";

function Main() {
    const location = useLocation();
    console.log(location);

    const pages = [
        {
            path: "",
            element: <p>HomePage</p>,
        },
        {
            path: "todo",
            element: <TodoApp />,
        },
    ];

    return (
        <main className=" min-h-screen bg-orange-100 p-4">
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
        </main>
    );
}

export default Main;
