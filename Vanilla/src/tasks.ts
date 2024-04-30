const form = document.querySelector<HTMLFormElement>("form")!;
const input = document.querySelector<HTMLInputElement>("#taskInput")!;
const list = document.querySelector<HTMLUListElement>("#tasks")!;

form.addEventListener("submit", createTask);

interface Task {
    task: string;
    id: number;
    isComplated: boolean;
    created: Date;
}

const localTasks: Task[] = JSON.parse(localStorage.getItem("tasks"));

const TasksList: Task[] = localTasks || [];

list.innerHTML = `
    ${TasksList.map((task) => {
        return `<li>${task.task}</li>`;
    })}
`;

function createTask(e: SubmitEvent): void {
    e.preventDefault();

    const task: string = input.value;
    console.log(task);

    const newTask: Task = {
        task: task,
        id: TasksList.length + 1,
        isComplated: false,
        created: new Date(),
    };

    TasksList.push(newTask);

    input.value = "";
    localStorage.setItem("tasks", JSON.stringify(TasksList));
    window.location.reload();
}
