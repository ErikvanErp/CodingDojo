import './App.css';
import CompWithChildren from './components/CompWithChildren';
import PersonCard from './components/PersonCard';
import Switch from './components/Switch';

function App() {
    return (
        <div className="App">
            <PersonCard firstName="Jane" lastName="Doe" age={ 45 } hairColor="Black"/>
            <PersonCard firstName="John" lastName="Smith" age={ 88 } hairColor="Brown"/>
            <PersonCard firstName="Millard" lastName="Fillmore" age={ 50 } hairColor="Brown"/>
            <PersonCard firstName="Maria" lastName="Smith" age={ 62 } hairColor="Brown"/>
        </div>
    );
}

export default App;
