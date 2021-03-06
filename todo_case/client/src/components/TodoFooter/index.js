import { AiOutlineDelete } from 'react-icons/ai';
import { useSelector } from 'react-redux';

function TodoFooter() {
  const todos = useSelector((state) => state.todos);

  const filteredYellow = todos.filter((todo) => todo.class === 'yellow');
  const filteredPurple = todos.filter((todo) => todo.class === 'purple');
  const filteredAqua = todos.filter((todo) => todo.class === 'aqua');
  const filteredBrown = todos.filter((todo) => todo.class === 'brown');
  const filteredOrange = todos.filter((todo) => todo.class === 'orange');

  return (
    todos.length > 0 && (
      <footer className='footer'>
        {filteredYellow.length > 0 && (
          <div className='list' style={{ backgroundColor: 'yellow' }}>
            <h3>Todo List 1</h3>
            {filteredYellow.map((todo, index) => (
              <div className='singleItem' key={index}>
                <input type='checkbox' />
                <p>{todo.title}</p>
                <AiOutlineDelete />
              </div>
            ))}
          </div>
        )}
        {filteredPurple.length > 0 && (
          <div className='list' style={{ backgroundColor: 'purple' }}>
            <h3>Todo List 2</h3>
            {filteredPurple.map((todo, index) => (
              <p key={index}>{todo.title}</p>
            ))}
          </div>
        )}
        {filteredAqua.length > 0 && (
          <div className='list' style={{ backgroundColor: 'aqua' }}>
            <h3>Todo List 3</h3>
            {filteredAqua.map((todo, index) => (
              <p key={index}>{todo.title}</p>
            ))}
          </div>
        )}
        {filteredBrown.length > 0 && (
          <div className='list' style={{ backgroundColor: 'brown' }}>
            <h3>Todo List 4</h3>
            {filteredBrown.map((todo, index) => (
              <p key={index}>{todo.title}</p>
            ))}
          </div>
        )}
        {filteredOrange.length > 0 && (
          <div className='list' style={{ backgroundColor: 'orange' }}>
            <h3>Todo List 5</h3>
            {filteredOrange.map((todo, index) => (
              <p key={index}>{todo.title}</p>
            ))}
          </div>
        )}
      </footer>
    )
  );
}

export default TodoFooter;
