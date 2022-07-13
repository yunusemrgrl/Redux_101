import { useDispatch } from 'react-redux';
import {
  toggleTodosAsyc,
  deleteTodosAsyc,
} from '../../../../redux/todos/services';
import { Popconfirm } from 'antd';
function TodoCard({ todo }) {
  const dispatch = useDispatch();

  const handleToggle = async (id, completed) => {
    await dispatch(toggleTodosAsyc({ id, data: { completed } }));
  };

  return (
    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          readOnly
          checked={todo.completed}
          onClick={() => handleToggle(todo.id, !todo.completed)}
        />
        <label>{todo.title}</label>

        <Popconfirm
          title='Are you sure'
          onConfirm={async () => await dispatch(deleteTodosAsyc(todo.id))}
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
