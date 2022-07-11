import React from 'react';
import { useDispatch } from 'react-redux';
import TodoList from './TodoList';
import { SetAllCompleted } from '../../../redux/todos/todosSlice';
function TodoContent({ todos }) {
  const dispatch = useDispatch();

  return (
    <section className='main'>
      {todos.length > 0 && (
        <>
          <input className='toggle-all' type='checkbox' />
          <label
            htmlFor='toggle-all'
            onClick={() => dispatch(SetAllCompleted())}
          >
            Mark all as complete
          </label>
        </>
      )}

      <TodoList />
    </section>
  );
}

export default TodoContent;
