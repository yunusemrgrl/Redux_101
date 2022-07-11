import React from 'react';
import TodoList from './TodoList';

function TodoContent({ todos }) {
  return (
    <section className='main'>
      {todos.length > 0 && (
        <>
          <input className='toggle-all' type='checkbox' />
          <label htmlFor='toggle-all'>Mark all as complete</label>
        </>
      )}

      <TodoList />
    </section>
  );
}

export default TodoContent;
