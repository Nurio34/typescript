import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../Store/hooks";
import { restartGame } from "../../../../Store/slices/hangman";

function Status() {
    //** const {isGameOver} = s => s.hangman */

    const { isGameOver, isWin } = useAppSelector((s) => s.hangman);
    const dispatch = useAppDispatch();

    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        const msg = isWin ? "You Win" : "Game Over";

        setMessage(() => {
            return msg;
        });

        const interval = setInterval(() => {
            setMessage((message) => {
                if (message === msg) {
                    return "Click to Restart";
                } else {
                    return msg;
                }
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [isGameOver]);

    function handleRestartGame() {
        dispatch(restartGame());
    }

    return (
        <section className="Status py-8">
            {isGameOver && (
                <button
                    className={`text-3xl font-extrabold capitalize ${
                        isWin ? "text-[green]" : "text-[red]"
                    }`}
                    style={{ fontVariant: "small-caps" }}
                    onClick={handleRestartGame}
                >
                    {message}
                </button>
            )}
        </section>
    );
}

export default Status;
