import React from 'react';

import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';

import { useAppDispatch } from '../hooks';
import { createTodo } from '../slices/todo-slice';


const CreateTodo = () => {
  const dispatch = useAppDispatch();

  const [todoText, setTodoText] = React.useState('');
  
  const onSubmit = () => {

    dispatch(createTodo({
      text: todoText,
      complete: false,
      hidden: false,
    }));

    setTodoText('');
  };

  return (
    <Box sx={{m: 4, gap: 2, display: 'flex'}}>
      <Input 
        size='lg' 
        placeholder="What needs to get done?" 
        sx={{flexGrow: 1}} 
        value={todoText} 
        onChange={e => setTodoText(e.target.value)} 
      />
      <Button onClick={onSubmit}>Create Todo</Button>
    </Box>
  );
};

export default CreateTodo;
