import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Details from './views/Details';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/products" />
        <Route element={<Details />} path="/product/:id" />
        <Route element={<Edit />} path="/product/:id/edit" />
      </Routes>
    </div>
  );
}

export default App;
