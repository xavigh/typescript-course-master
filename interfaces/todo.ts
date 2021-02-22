

interface ITodo {
    title: string;
    text: string;
}

function showTodo(todo: ITodo) {
    console.log(`${todo.title} - ${todo.text}`);
}

let myTodo: ITodo = { title: 'Eat dinner', text: 'Lorem' };

showTodo(myTodo);
