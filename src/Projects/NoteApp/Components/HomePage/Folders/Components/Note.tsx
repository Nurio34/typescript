import { CiStickyNote } from "react-icons/ci";

function Note() {
    return (
        <button
            className="grid grid-cols-[64px] overflow-hidden"
            title="html basics"
        >
            <CiStickyNote size={64} color="" />
            <p
                className="w-max text-sm capitalize "
                style={{ fontVariant: "small-caps" }}
            >
                html basics
            </p>
        </button>
    );
}

export default Note;
