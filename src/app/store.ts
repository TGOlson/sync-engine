import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import todosReducer from './slices/todo-slice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  // @ts-expect-error some error here with logger and redux toolkit typing
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` & `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
