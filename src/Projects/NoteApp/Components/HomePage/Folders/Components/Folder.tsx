import { FaFolderOpen } from "react-icons/fa";
import { FolderType } from "../../../../types";

function Folder({ id, name }: FolderType) {
    return (
        <div className="grid justify-items-center">
            <FaFolderOpen size={64} color="orange" />
            <p
                className="font-semibold capitalize"
                style={{ fontVariant: "small-caps" }}
            >
                {name}
            </p>
        </div>
    );
}

export default Folder;
