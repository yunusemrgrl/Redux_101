import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosAsyc } from '../../../../redux/todos/services';
import { selectFilteredTodos } from '../../../../redux/todos/todosSlice';
import TodoCard from '../TodoCard';
function TodoList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodosAsyc());
  }, [dispatch]);
  const filteredTodos = useSelector(selectFilteredTodos);

  return (
    <ul className='todo-list'>
      {filteredTodos.map((todo) => (
        <TodoCard todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}
export default TodoList;
