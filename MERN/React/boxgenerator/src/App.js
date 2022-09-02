import React, { useState } from 'react';

import './App.css';
import ColorForm from './components/ColorForm';
import Box from './components/Box';

function App() {
  const [colors, setColors ] = useState([]);

  const addColor = color => {setColors([...colors, color])}; 
  const boxes = colors.map( (color, i) => <Box color = { color } key = { i }></Box>);
  
  return (
    <div className="App">
      <div className="container">
        <ColorForm onAddColor={ addColor }/>
        <div className='row mt-3'>
          { boxes }
        </div>
      </div>
    </div>
  );
}

export default App;
