import express from 'express';
import morgan from 'morgan';
import path from 'path';
import nocache from 'nocache';
import { PartialTodo, Todo } from '../shared/types';

const app = express();

app.use(nocache());
app.use(morgan('tiny'));
app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/assets/js', express.static(path.resolve(__dirname, '../dist')));

const PORT = 3000;

const todos: Todo[] = [
  {
    id: 0,
    text: 'Learn React',
    completed: false,
    hidden: false,
  },
  {
    id: 1,
    text: 'Learn TypeScript',
    completed: false,
    hidden: false,
  },
  {
    id: 2,
    text: 'Make something cool',
    completed: false,
    hidden: false,
  },
];

app.get('/todos', (_req, res) => {
  res.json(todos);
});

app.post('/todos', express.json(), (req, res) => {
  const partialTodo = req.body as PartialTodo;
  const id = todos.length;

  const todo = {
    id,
    ...partialTodo,
  };
  
  todos.push(todo);
  
  res.json(todo);
});

app.post('/todos/:id', express.json(), (req, res) => {
  const id = parseInt(req.params.id);
  const partialTodo = req.body as Partial<Todo>;

  const todo = todos.find(todo => todo.id === id);

  if (!todo) {
    return res.status(404).json({message: 'Todo not found'});
  }

  Object.assign(todo, partialTodo);

  res.json(todo);
});

app.get('*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

export const startServer = () => app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
