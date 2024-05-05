import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleForm, toggleIsSignUp } from "../store/slices/form";

function SignIn() {
    const { isSignUpForm, isOpen } = useAppSelector((s) => s.form);
    const dispatch = useAppDispatch();

    function openFormFn(): void {
        dispatch(toggleForm(true));
        dispatch(toggleIsSignUp(false));
    }

    function toggleIsSignUpFn(): void {
        {
            isSignUpForm
                ? dispatch(toggleIsSignUp(false))
                : dispatch(toggleIsSignUp(true));
        }
    }

    //! Login Status
    const localUser: string | null = localStorage.getItem("user");
    const user = localUser && JSON.parse(localUser);
    //! ------------

    return (
        <button
            type="button"
            className=" text-orange-500 font-bold underline underline-offset-2"
            onClick={() => {
                !isOpen ? openFormFn() : toggleIsSignUpFn();
            }}
        >
            {!isSignUpForm && !user
                ? "Signup"
                : isSignUpForm && !user
                ? "Signin"
                : user}
        </button>
    );
}

export default SignIn;
