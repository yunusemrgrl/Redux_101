import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      {
        title: 'React öğren',
        id: 1,
        completed: true,
        class: 'yellow',
      },
      {
        title: 'Redux öğren',
        id: 2,
        completed: false,
        class: 'yellow',
      },
      {
        title: 'Next.js öğren',
        id: 3,
        completed: false,
        class: 'yellow',
      },
      {
        title: 'Node.js öğren',
        id: 4,
        completed: false,
        class: 'yellow',
      },
    ],
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
