import { PartialTodo, Todo } from "../shared/types";

export const fetchTodos = (): Promise<Todo[]> => fetch('/todos').then(res => res.json());

export const createTodo = (partialTodo: PartialTodo): Promise<Todo> => 
  fetch('/todos', {
    method: 'POST', 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(partialTodo)
  }).then(res => res.json());

export const updateTodo = (id: number, partialTodo: Partial<Todo>): Promise<Todo> =>
  fetch(`/todos/${id}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(partialTodo)
  }).then(res => res.json());
