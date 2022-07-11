import { useDispatch } from 'react-redux';
import { SetStatus, DeleteTodo } from '../../../../redux/todos/todosSlice';
import { Popconfirm } from 'antd';
function TodoCard({ todo }) {
  const dispatch = useDispatch();

  return (
    <li key={todo.id} className={todo.isCompleted ? 'completed' : ''}>
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          defaultChecked={todo.isCompleted ? true : false}
          onClick={() => dispatch(SetStatus({ id: todo.id }))}
        />
        <label>{todo.title}</label>

        <Popconfirm
          title='Are you sure'
          onConfirm={() => dispatch(DeleteTodo({ id: todo.id }))}
          onCancel={() => console.log('iptal edildi')}
          okText='Yes'
          cancelText='No'
          placement='left'
        >
          <button className='destroy'></button>
        </Popconfirm>
      </div>
    </li>
  );
}

export default TodoCard;
