interface TodoItem {
    id: number;
    title: string;
    status: todoStatus; // Using enum for status
    completedOn?: Date; // Optional property
}

enum todoStatus {
    todo= "todo",
    in_progress = "in-progress",
    done = "done",
};

const todoItems : TodoItem[] = [
    { id: 1, title: "Learn HTML", status: todoStatus.todo, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: todoStatus.in_progress },
    { id: 3, title: "Write the best app in the world", status: todoStatus.in_progress },
]



function addTodoItem(todo : string): TodoItem {
    const id = getNextId(todoItems)

    const newTodo : TodoItem = {
        id,
        title: todo,
        status: todoStatus.todo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T1 extends {id:number}>(items : T1[]): number {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))
