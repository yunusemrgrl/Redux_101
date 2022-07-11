import 'antd/dist/antd.min.css';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <div className='todoapp'>
        <Header />
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
