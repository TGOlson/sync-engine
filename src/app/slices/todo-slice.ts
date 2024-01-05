import * as api from '../api';

import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PartialTodo, Todo } from '../../shared/types';

type State = {
  todos: Todo[];
};

const initialState: State = {
  todos: [],
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  return await api.fetchTodos();
});

export const createTodo = createAsyncThunk('todos/createTodo', async (partialTodo: PartialTodo) => {
  return await api.createTodo(partialTodo);
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async ({id, update}: {id: number, update: Partial<Todo>}) => {
  return await api.updateTodo(id, update);
});

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state: State, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    });
    // Note: these updates only propagate on fulfillment, could probably do better optimistic updates...
    builder.addCase(createTodo.fulfilled, (state: State, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    });
    builder.addCase(updateTodo.fulfilled, (state: State, action: PayloadAction<Todo>) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);

      if (todo) {
        Object.assign(todo, action.payload);
      }
    });
  },
});

export default todos.reducer;
