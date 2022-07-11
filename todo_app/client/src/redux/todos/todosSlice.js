import axios from 'axios';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';

export const getTodosAsyc = createAsyncThunk(
  'todos/getTodosAsync',
  async () => {
    const res = await axios('http://localhost:7000/todos');
    return res.data;
  },
);

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    ActiveClass: 'all',
  },

  reducers: {
    AddTodo: {
      reducer: (state, action) => {
        state.todos.push(action.payload);
      },
      prepare: ({ title }) => {
        return {
          payload: {
            id: new Date().getTime(),
            title,
            completed: false,
          },
        };
      },
    },
    SetStatus: (state, action) => {
      const { id } = action.payload;
      const item = state.todos.find((item) => item.id === id);
      item.completed = !item.completed;
    },
    SetAllCompleted: (state, action) => {
      const status = state.todos.every((todo) => todo.completed === true);
      if (!status) {
        state.todos.every((todo) => (todo.completed = true));
      }
      console.log(status);
      if (status) {
        state.todos.filter((todo) => (todo.completed = !todo.completed));
      }
    },
    DeleteTodo: (state, action) => {
      const { id } = action.payload;
      const filtered = state.todos.filter((todo) => todo.id !== id);
      state.todos = filtered;
      message.info('Silindi.. 🤞');
    },
    SetActiveClass: (state, action) => {
      state.ActiveClass = action.payload;
    },
    ClearCompleted: (state, action) => {
      const filtered = state.todos.filter((todo) => !todo.completed);
      if (filtered.length < state.todos.length) {
        message.info('Güzel gidiyosun.. 🤞');
      }
      state.todos = filtered;
    },
  },
  extraReducers: {
    [getTodosAsyc.pending]: (state, action) => {
      message.loading({
        content: 'Loading...',
        key: 'todos_fetching',
      });
    },
    [getTodosAsyc.fulfilled]: (state, action) => {
      state.todos = action.payload;
      message.success({
        content: 'OK ✔',
        key: 'todos_fetching',
      });
    },
    [getTodosAsyc.rejected]: (state, action) => {
      message.warning({
        content: action.error.message,
        key: 'todos_fetching',
      });
    },
  },
});

export const selectTodos = (state) => state.todos.todos;

export const selectFilteredTodos = (state) => {
  if (state.todos.ActiveClass === 'all') {
    return state.todos.todos;
  }
  return state.todos.todos.filter((todo) =>
    state.todos.ActiveClass === 'active'
      ? todo.completed === false
      : todo.completed === true,
  );
};

export const {
  AddTodo,
  SetStatus,
  DeleteTodo,
  SetActiveClass,
  ClearCompleted,
  SetAllCompleted,
} = todosSlice.actions;
export default todosSlice.reducer;
