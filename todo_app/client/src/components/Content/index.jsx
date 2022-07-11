import { useSelector } from 'react-redux';
import TodoContent from './TodoContent';
import TodoFooter from './TodoFooter';
import TodoForm from './TodoForm';

function Content() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <>
      <TodoForm />
      <TodoContent todos={todos} />
      {todos.length > 0 && <TodoFooter />}
    </>
  );
}
export default Content;
