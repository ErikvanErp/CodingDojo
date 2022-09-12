import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Details from './views/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/products" />
        <Route element={<Details />} path="/product/:id" />
      </Routes>
    </div>
  );
}

export default App;
