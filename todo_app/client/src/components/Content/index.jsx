import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/todos/todosSlice';
import TodoContent from './TodoContent';
import TodoFooter from './TodoFooter';
import TodoForm from './TodoForm';

function Content() {
  const todos = useSelector(selectTodos);

  return (
    <>
      <TodoForm />
      <TodoContent todos={todos} />
      {todos.length > 0 && <TodoFooter />}
    </>
  );
}
export default Content;
