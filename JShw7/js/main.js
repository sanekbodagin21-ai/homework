"use strict"

const todoKeys = {
    id: "id",
    text: "text",
    year: "year",
    is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with ${todoId} not found`
const currentYear = 2026;

const getNewTodoId = (todos) => {
    return todos.reduce( (maxId, todo) =>  Math.max(maxId, todo[todoKeys.id]), 0) + 1;
};

const createTodo = (todos, text, year ) => {
    const newTodo = {
        [todoKeys.id]: getNewTodoId(todos),
        [todoKeys.text]: text, 
        [todoKeys.is_completed]: false,
        [todoKeys.year]: year,
    };
    todos.push(newTodo);
    return newTodo;
};

const changeTodoStyleById = (todos, todoId ) => {
    const todo = todos.find( todo => todo[todoKeys.id] === todoId);
    if (!todo) {
        console.error(errTodoNotFound(todoId));
        return null;
    } else {
    todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
    return todo;
    };
};

const deleteTodoById = (todos, todoId) => {
    const todoIndex = todos.findIndex( (todo) => todo[todoKeys.id] === todoId)
    if (todoIndex === -1) {
        console.error(errTodoNotFound(todoId));
        return todos;
    } else {
        todos.splice(todoIndex, 1);
        return todos;
    }
};

const isOverdue = todo => todo[todoKeys.year] < currentYear 

const deleteOverdueTodos = todos => {
    const initialLength = todos.length;
    for (let i = todos.length - 1; i >= 0; i--) {
        const todo = todos[i];
        if (isOverdue(todo)) {
            deleteTodoById(todos, todo[todoKeys.id]);
        }
    }
    const deletedTodo = initialLength - todos.length;
    if (deletedTodo > 0) {
        console.log(`Removed ${deletedTodo} overdue tasks`)
    } else {
        console.log(`There are no overdue tasks!`)
    }
    return todos;
}
