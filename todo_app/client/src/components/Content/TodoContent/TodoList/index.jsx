import { useSelector } from 'react-redux';

import { selectFilteredTodos } from '../../../../redux/todos/todosSlice';

import TodoCard from '../TodoCard';
function TodoList() {
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
