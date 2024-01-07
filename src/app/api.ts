import { TodoItem } from "@prisma/client";
import { CreateTodoItem } from "../shared/types";

export const fetchTodos = (): Promise<TodoItem[]> => fetch('/api/todos').then(res => res.json());

export const createTodo = (partialTodo: CreateTodoItem): Promise<TodoItem> => 
  fetch('/api/todos', {
    method: 'POST', 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(partialTodo)
  }).then(res => res.json());

export const updateTodo = (id: number, partialTodo: Partial<TodoItem>): Promise<TodoItem> =>
  fetch(`/api/todos/${id}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(partialTodo)
  }).then(res => res.json());
