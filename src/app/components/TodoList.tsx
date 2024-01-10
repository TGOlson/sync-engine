import React from 'react';
import { graphql } from 'relay-runtime';
import { useLazyLoadQuery, useMutation } from 'react-relay';

import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';

import type {TodoListQuery as TodoListQueryType} from './__generated__/TodoListQuery.graphql';

const TodoListQuery = graphql`
  query TodoListQuery {
    todoItems(orderBy: {createdAt: asc}) {
      id
      text
      complete
      hidden
      createdAt
      updatedAt
    }
  }
`;

const UpdateTodoItemMutation = graphql`
  mutation TodoListUpdateTodoItemMutation($id: String!, $complete: Boolean!) {
    updateOneTodoItem(where: {id: $id}, data: {complete: {set: $complete}}) {
      id
      text
      complete
      hidden
      createdAt
      updatedAt
    }
  }
`;

const TodoList = () => {
  const [commitMutation, _isMutationInFlight] = useMutation(UpdateTodoItemMutation);

  const data = useLazyLoadQuery<TodoListQueryType>(TodoListQuery, {});
  const todos = data.todoItems;

  const setComplete = (id: string, complete: boolean) => {
    commitMutation({
      variables: {
        id,
        complete,
      },
      optimisticUpdater: (store) => {
        store.get(id)?.setValue(complete, 'complete');
      },
    });
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
