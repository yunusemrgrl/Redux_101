import React from 'react';
import { useDispatch } from 'react-redux';
import { setCompletedTodosAsyc } from '../../../redux/todos/services';
import TodoList from './TodoList';

function TodoContent({ todos }) {
  const dispatch = useDispatch();

  const handleToggle = async (id, completed) => {
    await dispatch(setCompletedTodosAsyc({ id, data: { completed } }));
  };

  return (
    <section className='main'>
      {todos.length > 0 && (
        <>
          <input className='toggle-all' type='checkbox' />
          <label
            htmlFor='toggle-all'
            onClick={() =>
              todos.forEach((todo) => {
                handleToggle(todo.id, todo.completed);
              })
            }
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
