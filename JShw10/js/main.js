import { getTodosFromLocalStorage } from "./storage.js";
import { RenderTodos, initTodoHandlers } from "./DOM.js";
import {isOverdue, deleteOverdueTodos} from "./servese.js";

const todos = getTodosFromLocalStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
    RenderTodos(todos);
    initTodoHandlers(todos);
})





