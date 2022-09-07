import './App.css';

import { Routes, Route, Link, Navigate, useParams } from 'react-router-dom';

const Home = (props) => {
  return (<h1>Welcome</h1>);
}

const Word = (props) => {
  const { word } = useParams();
  
  return (
    isNaN(word) ?
    <h1>The word is: { word }</h1> :
    <h1>The number is: { word }</h1>
    )
}

const ColoredWord = (props) => {
  const { word, color1: color, color2: backgroundColor } = useParams();
  return (<h1 style={{color, backgroundColor}}>The word is { word }</h1>)
}

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/:word" element={<Word />}/>
        <Route path="/:word/:color1/:color2" element={<ColoredWord />}/>
      </Routes>
    </div>
  );
}



export default App;
