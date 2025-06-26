var todoStatus;
(function (todoStatus) {
    todoStatus["todo"] = "todo";
    todoStatus["in_progress"] = "in-progress";
    todoStatus["done"] = "done";
})(todoStatus || (todoStatus = {}));
;
const todoItems = [
    { id: 1, title: "Learn HTML", status: todoStatus.todo, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: todoStatus.in_progress },
    { id: 3, title: "Write the best app in the world", status: todoStatus.in_progress },
];
function addTodoItem(todo) {
    const id = getNextId(todoItems);
    const newTodo = {
        id,
        title: todo,
        status: todoStatus.todo,
    };
    todoItems.push(newTodo);
    return newTodo;
}
function getNextId(items) {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1;
}
const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app");
console.log(JSON.stringify(newTodo));
