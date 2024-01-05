export type Todo = {
  id: number;
  text: string;
  completed: boolean;
  hidden: boolean;
};

export type PartialTodo = Omit<Todo, 'id'>;
