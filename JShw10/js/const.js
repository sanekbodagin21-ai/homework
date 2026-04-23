export const todoKeys = {
    id: "id",
    text: "text",
    year: "year",
    is_completed: "is_completed",
};

export const errTodoNotFound = todoId => `Todo with ${todoId} not found`

export const currentYear = new Date().getFullYear();