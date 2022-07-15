import React from 'react';
import { useSelector } from 'react-redux';

function TodoFooter() {
  const todos = useSelector((state) => state.todos);

  const active = localStorage.getItem('class');
  const filteredYellow = todos.filter((todo) => todo.class === 'yellow');
  const filteredPurple = todos.filter((todo) => todo.class === 'purple');
  const filteredAqua = todos.filter((todo) => todo.class === 'aqua');
  const filteredBrown = todos.filter((todo) => todo.class === 'brown');
  const filteredOrange = todos.filter((todo) => todo.class === 'orange');

  return (
    todos.length > 0 && (
      <footer className='footer'>
        {filteredYellow.length > 0 && (
          <div className='listItem' style={{ backgroundColor: 'yellow' }}>
            <h3>Todo List 1</h3>
            {filteredYellow.map((todo, index) => (
              <p key={index}>{todo.title}</p>
            ))}
          </div>
        )}
        {filteredPurple.length > 0 && (
          <div className='listItem' style={{ backgroundColor: 'purple' }}>
            <h3>Todo List 2</h3>
            {filteredPurple.map((todo, index) => (
              <p key={index}>{todo.title}</p>
            ))}
          </div>
        )}
        {filteredAqua.length > 0 && (
          <div className='listItem' style={{ backgroundColor: 'aqua' }}>
            <h3>Todo List 3</h3>
            {filteredAqua.map((todo, index) => (
              <p key={index}>{todo.title}</p>
            ))}
          </div>
        )}
        {filteredBrown.length > 0 && (
          <div className='listItem' style={{ backgroundColor: 'brown' }}>
            <h3>Todo List 4</h3>
            {filteredBrown.map((todo, index) => (
              <p key={index}>{todo.title}</p>
            ))}
          </div>
        )}
        {filteredOrange.length > 0 && (
          <div className='listItem' style={{ backgroundColor: 'orange' }}>
            <h3>Todo List 5</h3>
            {filteredOrange.map((todo, index) => (
              <p key={index}>{todo.title}</p>
            ))}
          </div>
        )}
      </footer>
    )
  );
}

export default TodoFooter;
