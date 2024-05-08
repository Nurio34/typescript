import Platform from "./Components/Platform";
import Word from "./Components/Word";
import Keys from "./Components/Keys";
import Status from "./Components/Status";

function Hangman() {
    return (
        <main className="Hangman flex flex-col justify-center items-center">
            <h1
                className="font-extrabold text-2xl capitalize"
                style={{ fontVariant: "small-caps" }}
            >
                hangman
            </h1>
            <Platform />
            <Word />
            <Keys />
            <Status />
        </main>
    );
}

export default Hangman;
