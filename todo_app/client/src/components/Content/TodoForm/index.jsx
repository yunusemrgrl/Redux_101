import { message } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodosAsyc } from '../../../redux/todos/services';
import { selectTodos } from '../../../redux/todos/todosSlice';

function TodoForm() {
  const [todo, setTodo] = useState('');
  const [pending, SetPending] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      SetPending(true);
      if (todo.trim() === '') {
        return message.warning({
          content: 'Boş hayallerin peşinde koşma 🤬',
        });
      } else {
        await dispatch(addTodosAsyc({ title: todo }));
        setTodo('');
      }
    } catch (e) {
      alert(e);
      return;
    } finally {
      SetPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={todo}
        className='new-todo'
        placeholder={
          !pending
            ? todos.length === 0
              ? "Başlamak bitirmenin %50'si filandır.."
              : 'Başladın diye yolun yarısı bitti mi ?'
            : 'Pending..'
        }
        autoFocus
        disabled={pending}
        onChange={(e) => setTodo(e.target.value)}
      />
    </form>
  );
}
export default TodoForm;
