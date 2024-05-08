import React, { useEffect, useRef } from "react";
import { useAppSelector } from "../../../../Store/hooks";

function Button({
    char,
    checkWord,
}: {
    char: string;
    checkWord(e: React.MouseEvent<HTMLButtonElement>, key: string): void;
}) {
    const { isGameOver } = useAppSelector((s) => s.hangman);

    const ButtonEl = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (isGameOver === false) {
            if (ButtonEl.current) {
                ButtonEl.current.disabled = false;
                ButtonEl.current.style.backgroundColor = "rgb(243, 244, 246)";
            }
        }
    }, [isGameOver]);

    return (
        <button
            className="bg-gray-100 w-8 aspect-square font-black capitalize"
            onClick={(e) => !isGameOver && checkWord(e, char)}
            ref={ButtonEl}
        >
            {char}
        </button>
    );
}

export default Button;
