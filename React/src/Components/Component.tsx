//! ----------------------------------------------

import { useState } from "react";

type User = {
    name: string;
    id: number;
};

export const Component = () => {
    const [name, setName] = useState("");
    const [id, setId] = useState(NaN);

    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : {};

    function handleName(e: React.ChangeEvent<HTMLInputElement>): void {
        setName(e.target.value);
    }

    function handleID(e: React.ChangeEvent<HTMLInputElement>): void {
        setId(Number(e.target.value));
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        const user: User = {
            name,
            id,
        };
        localStorage.setItem("user", JSON.stringify(user));
    }

    return (
        <>
            <form
                className=" bg-orange-50 grid m-4 p-4 gap-4"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name..."
                    className="border border-black p-1"
                    onChange={handleName}
                    value={name}
                />
                <input
                    type="number"
                    name="id"
                    id="id"
                    placeholder="ID..."
                    className="border border-black p-1"
                    onChange={handleID}
                    value={id}
                />
                <button
                    type="submit"
                    className=" py-1 px-4 bg-orange-500 text-white "
                >
                    Submit
                </button>
            </form>

            {"name" in user && (
                <section>
                    <h1>User</h1>
                    <p>User : {user.name}</p>
                    <p>ID : {user.id} </p>
                </section>
            )}
        </>
    );
};
