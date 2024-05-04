import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Todo } from "../../../type";
import { addTodo, deleteTodo, updatedTodo } from "../../../store/slices/todo";

function Form() {
    const [todo, setTodo] = useState<string>("");
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editedTodoId, setEditedTodoId] = useState<number>(0);
    const InputElement = useRef<HTMLInputElement>(null);

    const todos = useAppSelector((s) => s.todos);
    const dispatch = useAppDispatch();

    const newTodo: Todo = {
        id: editedTodoId || todos.length + 1,
        todo,
        completed: false,
    };

    function handleSubmit(e: React.FormEvent): void {
        e.preventDefault();
        if (!isEditing) {
            dispatch(addTodo(newTodo));
        } else {
            dispatch(updatedTodo({ id: editedTodoId, editedTodo: newTodo }));
            setEditedTodoId(0);
            setIsEditing(false);
        }
        setTodo("");
    }

    function handleDeleteTodo(id: number): void {
        dispatch(deleteTodo(id));
    }

    function handleEditTodo(id: number): void {
        setIsEditing(true);
        setEditedTodoId(id);
        console.log("Edit mode on");
        const todo = todos.filter((todo) => todo.id === id)[0].todo;
        InputElement.current?.focus();
        setTodo(todo);
    }

    return (
        <>
            <form
                className=" border border-orange-500 rounded-[50vw] overflow-hidden"
                onSubmit={handleSubmit}
            >
                <input
                    ref={InputElement}
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Add todo..."
                    className="py-1 px-4 w-full outline-none"
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                />
            </form>
            <ul className="grid gap-2 py-2">
                {todos.map((todo) => {
                    return (
                        <li
                            key={todo.id}
                            className="flex gap-1 items-center border-b border-gray-400 py-2"
                        >
                            <p>{todo.todo}</p>
                            <button
                                type="button"
                                className=" text-xs bg-red-500 ml-auto rounded-md p-1 text-white"
                                onClick={() => handleDeleteTodo(todo.id)}
                            >
                                Delete
                            </button>
                            <button
                                type="button"
                                className=" text-xs bg-blue-500 rounded-md p-1 text-white"
                                onClick={() => handleEditTodo(todo.id)}
                            >
                                Edit
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Form;
