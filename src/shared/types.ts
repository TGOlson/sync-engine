import { TodoItem } from "@prisma/client";

export type CreateTodoItem = Omit<TodoItem, 'id' | 'createdAt' | 'updatedAt'>;
