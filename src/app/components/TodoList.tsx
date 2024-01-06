import React, { useEffect } from 'react';

import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';

import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchTodos, updateTodo } from '../slices/todo-slice';

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (todos.length === 0) {
      dispatch(fetchTodos());
    }
  }, []);

  const setComplete = (id: number, complete: boolean) => {
    dispatch(updateTodo({id, update: {complete}}));
  };
  
  return (
    <Box sx={{m: 4, gap: 2, display: 'flex', flexDirection: 'column'}}>
      <Typography level="h3">Todos</Typography>
      {todos.map((todo) => (
        <Card key={todo.id} sx={{display: 'flex', flexDirection: 'row'}}>
          <Checkbox 
            color="success" 
            size="lg" 
            variant="outlined" 
            checked={todo.complete}  
            onChange={e => setComplete(todo.id, e.target.checked)}
          />
          <Typography sx={{textDecoration: todo.complete ? 'line-through' : null}}>{todo.text}</Typography>
        </Card>
      ))}
    </Box>
  );
};

export default TodoList;
