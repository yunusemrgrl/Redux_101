import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        title: action.payload.title,
        id: new Date().getTime(),
        completed: false,
        class: action.payload.class,
      });
    },
  },
});

export const { addTodo } = todoSlice.actions;
