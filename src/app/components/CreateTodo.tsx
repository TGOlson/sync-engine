import React from 'react';
import { graphql } from 'relay-runtime';

import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import { useMutation } from 'react-relay';

// import { useAppDispatch } from '../hooks';
// import { createTodo } from '../slices/todo-slice';

// mutation {
//   createOneTodoItem(data: {
//     text: "${partialTodo.text}",
//     complete: ${partialTodo.complete},
//     hidden: ${partialTodo.hidden}
//   }) {
//     id
//     text
//     complete
//     hidden
//     createdAt
//     updatedAt
//   }
// }

const CreateTodoMutation = graphql`
  mutation CreateTodoMutation (
    $text: String!,
    $complete: Boolean!,
    $hidden: Boolean!
  ) {
    createOneTodoItem(
      data: {
        text: $text,
        complete: $complete,
        hidden: $hidden
      }
    ) {
      id
      text
      complete
      hidden
      createdAt
      updatedAt
    }
  }
`;

const CreateTodo = () => {
  const [todoText, setTodoText] = React.useState('');
  const [commitMutation, isMutationInFlight] = useMutation(CreateTodoMutation);

  const onSubmit = () => {
    commitMutation({
      variables: {
        text: todoText,
        complete: false,
        hidden: false,
      },
      optimisticUpdater: (store) => {
        // window.store = store; // tslint:disable-line
        store.create('temp-id-1', 'TodoItem')
          .setValue(todoText, 'text')
          .setValue(false, 'complete')
          .setValue(false, 'hidden');
      },
    });

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
      <Button onClick={onSubmit} disabled={isMutationInFlight}>Create Todo</Button>
    </Box>
  );
};

export default CreateTodo;
