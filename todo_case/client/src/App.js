import './App.css';
import TodoFooter from './components/TodoFooter';
import TodoHeader from './components/TodoHeader';
import TodoMain from './components/TodoMain';

function App() {
  return (
    <div className='App'>
      <TodoHeader />
      <TodoMain />
      <TodoFooter />
    </div>
  );
}

export default App;
