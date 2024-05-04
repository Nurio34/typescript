import { Route, Routes } from "react-router-dom";
import TodoApp from "../Projects/TodoApp";

function Main() {
    const pages = [
        {
            path: "/typescript-basics",
            element: <p>Hello from HomePage</p>,
        },
        {
            path: "/typescript-basics/todo",
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
