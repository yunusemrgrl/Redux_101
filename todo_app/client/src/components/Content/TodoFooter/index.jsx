import { message } from 'antd';
import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { clearCompeletedTodosAsyc } from '../../../redux/todos/services';
import { SetActiveClass, selectTodos } from '../../../redux/todos/todosSlice';

function TodoFooter() {
  const todos = useSelector(selectTodos);

  const activeFilter = useSelector((state) => state.todos.ActiveClass);

  const ItemLeft = todos.filter((todo) => !todo.completed);

  useEffect(() => {
    localStorage.setItem('active-class', activeFilter);
  }, [activeFilter]);

  const dispatch = useDispatch();

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{ItemLeft.length} </strong>
        {ItemLeft.length > 1 ? 'items left' : 'item left'}
      </span>
      <ul className='filters'>
        <li>
          <a
            href='#/'
            onClick={() => dispatch(SetActiveClass('all'))}
            className={activeFilter === 'all' ? 'selected' : ''}
          >
            All
          </a>
        </li>
        <li>
          <a
            href='#/'
            onClick={() => dispatch(SetActiveClass('active'))}
            className={activeFilter === 'active' ? 'selected' : ''}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href='#/'
            onClick={() => dispatch(SetActiveClass('completed'))}
            className={activeFilter === 'completed' ? 'selected' : ''}
          >
            Completed
          </a>
        </li>
      </ul>

      {activeFilter !== 'active' && (
        <button
          className='clear-completed'
          onClick={() => {
            const filtered = todos.filter((todo) => todo.completed);
            filtered.forEach((todo) =>
              dispatch(clearCompeletedTodosAsyc(todo.id)),
            );
            if (filtered.length >= todos.length / 2) {
              message.info('Güzel gidiyosun.. 🤞', 1.5);
            }
          }}
        >
          Clear completed
        </button>
      )}
    </footer>
  );
}
export default React.memo(TodoFooter);
