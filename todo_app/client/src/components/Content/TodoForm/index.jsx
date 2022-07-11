import { message } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo, selectTodos } from '../../../redux/todos/todosSlice';

function TodoForm() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === '') return;
    dispatch(AddTodo({ title: todo }));
    setTodo('');
    message.success({
      content: 'Başarılı 😎',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={todo}
        className='new-todo'
        placeholder={
          todos.length !== 0
            ? 'What needs to be done'
            : "Başlamak bitirmenin %25'i filandır.."
        }
        autoFocus
        onChange={(e) => setTodo(e.target.value)}
      />
    </form>
  );
}
export default TodoForm;
