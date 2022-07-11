import { createSlice } from '@reduxjs/toolkit';

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
            isCompleted: false,
          },
        };
      },
    },
    SetStatus: (state, action) => {
      const { id } = action.payload;
      const item = state.todos.find((item) => item.id === id);
      item.isCompleted = !item.isCompleted;
    },
    DeleteTodo: (state, action) => {
      const { id } = action.payload;
      const filtered = state.todos.filter((todo) => todo.id !== id);
      state.todos = filtered;
    },
    SetActiveClass: (state, action) => {
      state.ActiveClass = action.payload;
    },
    ClearCompleted: (state) => {
      const filtered = (state.todos = state.todos.filter(
        (todo) => !todo.isCompleted,
      ));
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
      ? todo.isCompleted === false
      : todo.isCompleted === true,
  );
};

export const {
  AddTodo,
  SetStatus,
  DeleteTodo,
  SetActiveClass,
  ClearCompleted,
} = todosSlice.actions;
export default todosSlice.reducer;
