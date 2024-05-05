import SignIn from "../../../Components/SignIn";

function Header() {
    return (
        <header className="flex justify-between">
            <div className="font-bold text-2xl capitalize ">Todo App</div>
            <SignIn />
        </header>
    );
}

export default Header;
