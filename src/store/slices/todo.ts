import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type Todo } from "../../type";

function loadTodos(): Todo[] | [] {
    const localTodos = localStorage.getItem("todos");
    return localTodos ? JSON.parse(localTodos) : [];
}

const initialState: Todo[] = loadTodos();

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            const todos = loadTodos();
            const newTodos = [...todos, action.payload];
            localStorage.setItem("todos", JSON.stringify(newTodos));
            state = newTodos;
            return state;
        },
        updatedTodo: (
            state,
            action: PayloadAction<{ id: number; editedTodo: Todo }>,
        ) => {
            const todos = loadTodos();
            const updatedTodos = todos.map((todo) => {
                return todo.id === action.payload.id
                    ? action.payload.editedTodo
                    : todo;
            });
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            state = updatedTodos;
            return state;
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            const todos = loadTodos();
            const newTodos = todos
                .filter((todo) => todo.id !== action.payload)
                .map((todo, index) => ({ ...todo, id: index + 1 }));
            localStorage.setItem("todos", JSON.stringify(newTodos));
            state = newTodos;
            return state;
        },
    },
});

export const { addTodo, updatedTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
