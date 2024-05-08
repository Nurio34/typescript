import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/HomePage";
import Create from "./Components/Create";
import Note from "./Components/Note";
import ErrorPage from "./Components/ErrorPage";
import Folder from "./Components/Folder";

function NoteApp() {
    return (
        <section className="NoteApp">
            <h1
                className=" font-extrabold text-2xl capitalize text-center text-orange-500"
                style={{ fontVariant: "small-caps" }}
            >
                notes app
            </h1>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/new" element={<Create />} />
                <Route path="/folder/:id" element={<Folder />} />
                <Route path="/note/:id" element={<Note />} />
                <Route path="/:id/edit" element={<Create />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </section>
    );
}

export default NoteApp;
