import { TodoItem } from "@prisma/client";
import { CreateTodoItem } from "../shared/types";

export const fetchTodos = (): Promise<TodoItem[]> => 
  fetch('/api/graphql', {
    method: 'POST', 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          todoItems(orderBy: {createdAt: asc}) {
            id
            text
            complete
            hidden
            createdAt
            updatedAt
          }
        }
      `
    })
  })
    .then(res => res.json())
    .then(json => json.data.todoItems);

export const createTodo = (partialTodo: CreateTodoItem): Promise<TodoItem> => 
  fetch('/api/graphql', {
    method: 'POST', 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        mutation {
          createOneTodoItem(data: {
            text: "${partialTodo.text}",
            complete: ${partialTodo.complete},
            hidden: ${partialTodo.hidden}
          }) {
            id
            text
            complete
            hidden
            createdAt
            updatedAt
          }
        }
      `
    })
  })
    .then(res => res.json())
    .then(res => res.data.createOneTodoItem);

// Note: hardcoded to only work with updating the `complete` field for now...
export const updateTodo = (id: number, partialTodo: Partial<TodoItem>): Promise<TodoItem> =>
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        mutation {
          updateOneTodoItem(where: { id: ${id} }, data: {
            complete: {set: ${partialTodo.complete}},
          }) {
            id
            text
            complete
            hidden
            createdAt
            updatedAt
          }
        }
      `
    })
  })
    .then(res => res.json())
    .then(res => res.data.updateOneTodoItem);
