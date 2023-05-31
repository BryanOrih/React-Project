
import './App.css';
import Background from './components/BackgroundLayout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/HomePage';
function App() {
  return (
    <div className="App">
      <Background/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}
//NOTE - Make sure you put the maid into the home page route
//NOTE - Put text into the home page route
//NOTE - Put logo as it's own component
export default App;
