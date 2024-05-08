import { createSlice } from "@reduxjs/toolkit";
import { FolderType, NotesApp } from "../../Projects/NoteApp/types";

//! --- "DEVELOPMENT" ---
const notesObj = {
    folders: [
        {
            id: 1,
            name: "html",
        },
        {
            id: 2,
            name: "css",
        },
    ],
    notes: [{}],
};
localStorage.setItem("notes", JSON.stringify(notesObj));
//! ---------------------

//! --- initial "folders" ---

const localNotes = localStorage.getItem("notes");
let folders: FolderType[] = [];

if (localNotes) {
    const parsedFolders: any = Object.entries(JSON.parse(localNotes)).filter(
        ([key, _]) => key === "folders",
    )[0][1];
    folders = parsedFolders;
} else {
    folders = [];
}

//!-----

//! --- handle initial state ---

const initialState: NotesApp = {
    folders,
};
//! ------------------------------

export const notes = createSlice({
    name: "notes",
    initialState,
    reducers: {},
});

export const {} = notes.actions;
export default notes.reducer;
