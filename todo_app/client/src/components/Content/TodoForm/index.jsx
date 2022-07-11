import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddTodo } from '../../../redux/todos/todosSlice';

function TodoForm() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === '') return;
    dispatch(AddTodo({ title: todo }));
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={todo}
        className='new-todo'
        placeholder='What needs to be done?'
        autoFocus
        onChange={(e) => setTodo(e.target.value)}
      />
    </form>
  );
}
export default TodoForm;
