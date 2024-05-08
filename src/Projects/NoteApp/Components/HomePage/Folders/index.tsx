import Folder from "./Components/Folder";
import Note from "./Components/Note";
import AddFolder from "./Components/AddFolder";
import AddNote from "./Components/AddNote";
import { useAppSelector } from "../../../../../Store/hooks";
import { FolderType } from "../../../types";

function Folders() {
    const { folders } = useAppSelector((s) => s.notes);
    console.log(folders);

    return (
        <div className="flex items-start gap-4">
            {folders.map((folder: FolderType) => {
                return <Folder key={folder.id} {...folder} />;
            })}
            <Note />
            <AddFolder />
            <AddNote />
        </div>
    );
}

export default Folders;
