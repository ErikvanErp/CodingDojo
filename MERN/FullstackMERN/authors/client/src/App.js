import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import NewAuthor from './views/NewAuthor';
import EditAuthor from './views/EditAuthor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<NewAuthor />} path="/new" />
        <Route element={<EditAuthor />} path="/edit/:id" />
      </Routes>
    </div>
  );
}

export default App;
