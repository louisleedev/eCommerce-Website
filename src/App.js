import './App.css';
import './default.scss';
import Homepage from './pages/Homepage';
import Header from './component/Header/index'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
