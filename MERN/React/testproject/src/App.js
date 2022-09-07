import React from "react";
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
import { useParams } from "react-router-dom";
    
const Location = (props) => {
  const { city } = useParams();
  return (
    <h1>Location Component Loaded! Welcome to { city }</h1>
  );
}
    
function App() {
  return (
    <div>
      <p>
        <Link to="/location/seattle">Seattle</Link>
         | 
        <Link to="/location/chicago">Chicago</Link>
         | 
        <Link to="/location/burbank">Burbank</Link>
      </p>
      <Routes>
        <Route path="/location/:city" element={<Location />}/>
      </Routes>
    </div>
  );
}
    
export default App;
