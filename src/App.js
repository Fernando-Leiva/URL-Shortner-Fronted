import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className='App'>
        <Home/>
    </div>
  );
}

export default App;
