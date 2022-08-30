import './App.css';

import React from 'react';
import MyComponent from './components/myComponent';

function App() {
    return (
        <div className="App">
            <h1>Hello</h1>
            <MyComponent fName = "Erik" lName = "van Erp"/>
            <MyComponent fName = "River" lName = "van Erp"/>
            <MyComponent fName = "Susan" lName = "Qu"/>
        </div>
    );
}

export default App;
