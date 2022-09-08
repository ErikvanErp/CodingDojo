import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import People from './components/People';
import Planet from './components/Planet';

function App() {
  const [resource, setResource] = useState("people");
  const [id, setId] = useState("");
  
  const handleResourceChange = (resource) => {
    setResource(resource);
  }
  
  const handleIdChange = (id) => {
    setId(id);
  }
  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${ resource }/${ id }`);
  }
  
  const resources = ["people", "planets"];
  const resourceOptions = resources.map((item, idx) => 
    <option key={ idx } value={item}>{ item }</option>
  ); 

  return (
    <div className="App">

      <div className="container">
        <div className="row">
          <div className="col">

            <form onSubmit={ handleSubmit }>
              <label htmlFor="resource">Search for: </label>
              <select value={ resource } onChange={ (e) => handleResourceChange(e.target.value) } className="form-select">
                { resourceOptions }
              </select>
              <label htmlFor="num">ID</label>
              <input type="text" onChange={ (e) => handleIdChange(e.target.value)} value={ id } className='form-control'></input>
              <button className='btn btn-primary mt-3'>Search</button>
            </form>

          </div>
        </div>
        <div className='row'>
          <div className='col mt-5'> 
            <Routes>
              <Route path="/people/:pathid" element={<People/>}/>
              <Route path="/planets/:pathid" element={<Planet/>}/>
            </Routes>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
