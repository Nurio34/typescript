import Form from "./Components/Form";

function TodoApp() {
    return (
        <section className=" min-h-screen  ">
            <h1
                className="font-bold text-2xl capitalize text-center p-4"
                style={{ fontVariant: "small-caps" }}
            >
                todo app
            </h1>
            <Form />
        </section>
    );
}

export default TodoApp;
