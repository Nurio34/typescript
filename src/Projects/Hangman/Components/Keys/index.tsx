import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../Store/hooks";
import {
    checkIfGameOver,
    handleCorrectGuess,
    handleWrongGuess,
    handleIfWin,
} from "../../../../Store/slices/hangman";
import { keys } from "./keys";
import Button from "./Button";

function Keys() {
    const { charsToGuess, isGameOver } = useAppSelector((s) => s.hangman);
    const [wrongAnsweCount, setWrongAnsweCount] = useState<number>(0);

    const dispatch = useAppDispatch();

    function checkWord(e: React.MouseEvent<HTMLButtonElement>, key: string) {
        //! --- check if "word" includes "key"
        const isKeyMatch = charsToGuess.includes(key);
        e.currentTarget.disabled = true;

        if (!isKeyMatch) {
            //! --- make button red
            e.currentTarget.style.background = "red";

            //! --- display next "body" part
            setWrongAnsweCount((pre) => pre + 1);
        } else {
            //! --- make button green
            e.currentTarget.style.background = "green";
            e.currentTarget.style.color = "white";
            e.currentTarget.style.outline = "2px solid white";

            //! --- display the guesed "char"
            dispatch(handleCorrectGuess(key));
        }
    }

    useEffect(() => {
        //! --- display next "body" part
        dispatch(handleWrongGuess(wrongAnsweCount));

        //! --- "GAME OVER" if "all parts" display
        dispatch(checkIfGameOver(wrongAnsweCount));
    }, [wrongAnsweCount]);

    //! --- check if "win"

    useEffect(() => {
        charsToGuess.length === 0 && dispatch(handleIfWin());
    }, [charsToGuess]);

    useEffect(() => {
        if (isGameOver === false) {
            setWrongAnsweCount(0);
        }
    }, [isGameOver]);

    return (
        <section className="Keys grid gap-4 grid-cols-[repeat(auto-fit,minmax(34px,1fr))] bg-[green] max-w-[320px] p-4">
            {keys.map((char) => (
                <Button key={char} char={char} checkWord={checkWord} />
            ))}
        </section>
    );
}

export default Keys;
