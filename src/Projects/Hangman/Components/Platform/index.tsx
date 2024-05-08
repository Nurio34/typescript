import { useAppSelector } from "../../../../Store/hooks";

function Platfom() {
    const { partsDisplaying } = useAppSelector((s) => s.hangman);

    return (
        <section className="Platform w-[329px] h-52 bg-[red] relative ">
            <div className="Bottom absolute bottom-0 left-1 w-[171.5px] h-[8px] bg-black ">
                <div className="Middle absolute w-[8px] h-[200px] bg-black bottom-0 left-1/2 -translate-x-1/2">
                    <div className="Top absolute w-[171.5px] h-[8px] bg-black">
                        <div
                            className={`Rope absolute w-[8px] h-[52px] bg-black right-0 ${
                                !partsDisplaying.includes("Rope") && "hidden"
                            }`}
                        >
                            <div
                                className={`Head absolute w-[32px] aspect-square bg-black rounded-full bottom-0 left-1/2 translate-y-full -translate-x-1/2 ${
                                    !partsDisplaying.includes("Head") &&
                                    "hidden"
                                }`}
                            >
                                <div
                                    className={`Body absolute w-[8px] h-[44px] bg-black bottom-0 left-1/2 translate-y-full -translate-x-1/2 ${
                                        !partsDisplaying.includes("Body") &&
                                        "hidden"
                                    }`}
                                >
                                    <div
                                        className={`Right-Arm absolute w-[6px] h-[52px] bg-black top-[4px] -rotate-[30deg] origin-top ${
                                            !partsDisplaying.includes(
                                                "Right-Arm",
                                            ) && "hidden"
                                        } `}
                                    ></div>
                                    <div
                                        className={`Left-Arm absolute w-[6px] h-[52px] bg-black top-[4px] rotate-[30deg] origin-top ${
                                            !partsDisplaying.includes(
                                                "Left-Arm",
                                            ) && "hidden"
                                        } `}
                                    ></div>
                                    <div
                                        className={`Right-Leg absolute w-[6px] h-[60px] bg-black bottom-[4px] right-0 translate-y-full -rotate-[15deg] origin-top-right ${
                                            !partsDisplaying.includes(
                                                "Right-Leg",
                                            ) && "hidden"
                                        } `}
                                    ></div>
                                    <div
                                        className={`Left-Leg absolute w-[6px] h-[60px] bg-black bottom-[4px] translate-y-full rotate-[15deg] origin-top-left ${
                                            !partsDisplaying.includes(
                                                "Left-Leg",
                                            ) && "hidden"
                                        } `}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Platfom;
