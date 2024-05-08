import { useAppSelector } from "../../../../Store/hooks";

function Word() {
    const { word, charsToGuess, isGameOver } = useAppSelector((s) => s.hangman);

    const chars = word.split("").filter((ch) => ch !== " ");

    return (
        <section className="Word flex gap-2 py-8 justify-center">
            {chars.map((char, index) => {
                return (
                    <span
                        key={index}
                        className={`border-b-4 border-black min-w-5 capitalize text-center font-semibold text-lg`}
                    >
                        <span
                            className={`${
                                !isGameOver &&
                                charsToGuess.includes(char) &&
                                "hidden"
                            }`}
                        >
                            {char}
                        </span>
                    </span>
                );
            })}
        </section>
    );
}

export default Word;
