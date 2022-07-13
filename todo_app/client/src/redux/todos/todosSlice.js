import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import {
  addTodosAsyc,
  deleteTodosAsyc,
  getTodosAsyc,
  toggleTodosAsyc,
  setCompletedTodosAsyc,
} from './services';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    ActiveClass: localStorage.getItem('active-class'),
  },

  reducers: {
    // SetAllCompleted: (state, action) => {
    //   console.log('checked completed:', action.payload);
    //   const status = state.todos.every((todo) => todo.completed === true);
    //   if (!status) {
    //     state.todos.every((todo) => (todo.completed = true));
    //   }
    //   if (status) {
    //     state.todos.filter((todo) => (todo.completed = !todo.completed));
    //   }
    // },
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
  // get todos
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
        content: 'Ok...',
        key: 'todos_fetching',
      });
    },
    [getTodosAsyc.rejected]: (state, action) => {
      message.warning({
        content: action.error.message,
        key: 'todos_fetching',
      });
    },
    // add todos
    [addTodosAsyc.pending]: (state, action) => {
      message.loading({
        content: 'Pending.. ',
        key: 'todos_post',
      });
    },
    [addTodosAsyc.fulfilled]: (state, action) => {
      state.todos.unshift(action.payload);
      message.success({
        content: 'Eklendi.. ✔',
        key: 'todos_post',
      });
    },
    [addTodosAsyc.rejected]: (state, action) => {
      message.warning({
        content: action.error.message,
        key: 'todos_post',
      });
    },
    // toggle todo
    [toggleTodosAsyc.fulfilled]: (state, action) => {
      const { id, completed } = action.payload;
      const index = state.todos.findIndex((item) => item.id === id);
      state.todos[index].completed = completed;
    },
    // completed todos
    [setCompletedTodosAsyc.fulfilled]: (state, action) => {
      console.log(action.payload);
      const { id, completed } = action.payload;
      const index = state.todos.findIndex((item) => item.id === id);

      const status = state.todos.every((todo) => todo.completed === false);
      console.log(status);
      state.todos[index].completed = !completed;
      if (!status) {
        state.todos[index].completed = true;
      }
    },
    // delete todo
    [deleteTodosAsyc.fulfilled]: (state, action) => {
      const id = action.payload;
      const filtered = state.todos.filter((item) => item.id !== id);
      state.todos = filtered;
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

export const { SetActiveClass, ClearCompleted, SetAllCompleted } =
  todosSlice.actions;
export default todosSlice.reducer;
