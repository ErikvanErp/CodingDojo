import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import New from './views/New';
import Game from './views/Game';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path ="/players/list" />
        <Route element={<New />} path="players/new" />
        <Route element={<Game />} path="status/game/:num" />
      </Routes>
    </div>
  );
}

export default App;
