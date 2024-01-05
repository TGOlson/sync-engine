import React from 'react';

import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

import CreateTodo from '../components/CreateTodo';
import TodoList from '../components/TodoList';

const App = () => {
  return (
    <CssVarsProvider>
      <CssBaseline />
      
      <CreateTodo />
      <TodoList />
    </CssVarsProvider>
  );
};

export default App;
