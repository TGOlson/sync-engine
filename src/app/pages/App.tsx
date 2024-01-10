import React from 'react';

import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

// import CreateTodo from '../components/CreateTodo';
// import TodoList from '../components/TodoList';
import { BootstrapQueryType } from '../api';

type AppProps = {
  store: {root: BootstrapQueryType | null};
};

const App = (props: AppProps) => {
  console.log('App props.store', props.store);

  return (
    <CssVarsProvider>
      <CssBaseline />
      
      <h1>App</h1>

      {/* <CreateTodo />
      <TodoList /> */}
    </CssVarsProvider>
  );
};

export default App;
