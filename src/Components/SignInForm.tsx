import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleForm } from "../store/slices/form";
import { signUp, signIn } from "../store/slices/signup";
import {
    SignInType,
    SignUpType,
    SignInSchema,
    SignUpSchema,
} from "../store/slices/signup";
import SignIn from "./SignIn";
import { IoIosClose } from "react-icons/io";

function SignInForm() {
    const [name, setName] = useState<string>("");
    const [invalidName, setInvalidName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [invalidEmail, setInvalidEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [invalidPassword, setInvalidPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [invalidConfirmPassword, setInvalidConfirmPassword] =
        useState<string>("");

    const { isOpen, isSignUpForm } = useAppSelector((s) => s.form);
    const dispatch = useAppDispatch();

    function closeFormFn(): void {
        dispatch(toggleForm(false));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (isSignUpForm) {
            const user: SignUpType = {
                id: 1,
                name,
                email,
                password,
            };

            const result = SignUpSchema.safeParse(user);

            if (!result.success) {
                result.error.issues.forEach((issue) => {
                    issue.path[0] === "name"
                        ? setInvalidName(issue.message)
                        : issue.path[0] === "email"
                        ? setInvalidEmail(issue.message)
                        : setInvalidPassword(issue.message);
                });
                console.log(result.error.issues);
                return;
            }

            if (password !== confirmPassword) {
                setInvalidConfirmPassword("Passwords don't match");
                return;
            } else {
                dispatch(signUp(user));
                closeFormFn();
            }
        }
    }

    return (
        isOpen && (
            <div className=" bg-[rgba(0,0,0,0.8)] absolute top-0 left-0 w-full h-full overflow-hidden">
                <form
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-4 px-8 rounded-lg"
                    onSubmit={handleSubmit}
                >
                    <button
                        type="button"
                        className=" absolute top-0 right-0 -translate-x-full translate-y-1/2 bg-red-500 w-6 aspect-square rounded-full flex justify-center items-center"
                        onClick={closeFormFn}
                    >
                        <IoIosClose size={24} />
                    </button>
                    <fieldset className=" grid gap-2">
                        <legend
                            className=" font-semibold text-lg capitalize text-center pb-4"
                            style={{ fontVariant: "small-caps" }}
                        >
                            {!isSignUpForm ? "SignIn" : "SignUp"}
                        </legend>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter name..."
                            className=" outline-none border border-orange-500  rounded-[100vw] py-1 px-4"
                            onChange={(e) => setName(e.target.value)}
                            onFocus={() => setInvalidName("")}
                        />
                        <p className=" text-xs text-[red]">
                            {isSignUpForm && invalidName}
                        </p>
                        {isSignUpForm && (
                            <>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter email..."
                                    className=" outline-none border border-orange-500  rounded-[100vw] py-1 px-4"
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={() => setInvalidEmail("")}
                                />
                                <p className=" text-xs text-[red]">
                                    {invalidEmail}
                                </p>
                            </>
                        )}
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter password..."
                            className=" outline-none border border-orange-500  rounded-[100vw] py-1 px-4"
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setInvalidPassword("")}
                        />
                        <p className=" text-xs text-[red]">
                            {isSignUpForm && invalidPassword}
                        </p>

                        {isSignUpForm && (
                            <>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="Confirm password..."
                                    className=" outline-none border border-orange-500  rounded-[100vw] py-1 px-4"
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    onFocus={() =>
                                        setInvalidConfirmPassword("")
                                    }
                                />
                                <p className=" text-xs text-[red]">
                                    {invalidConfirmPassword}
                                </p>
                            </>
                        )}
                        <button
                            type="submit"
                            className=" p-1 bg-orange-500 text-white"
                        >
                            {!isSignUpForm ? "Sign in" : "Sign Up"}
                        </button>
                        <div className="flex justify-between items-center pt-4">
                            <p className="text-sm">
                                {!isSignUpForm
                                    ? "Doesnt have an account ?"
                                    : "Already have an account ?"}
                            </p>
                            <SignIn />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    );
}

export default SignInForm;
