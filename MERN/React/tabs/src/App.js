import './App.css';
import Tabs from './components/Tabs';

const tabs = [
  {
    label: "Apple", 
    content: "Apple Inc. is an American multinational technology company that specializes in consumer electronics, software and online services headquartered in Cupertino, California, United States."
  },
  {
    label: "Google",
    content: "Google LLC is an American multinational technology company that focuses on search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics."
  },
  {
    label: "Spotify",
    content: "Spotify is a proprietary Swedish audio streaming and media services provider founded on 23 April 2006 by Daniel Ek and Martin Lorentzon. It is one of the largest music streaming service providers, with over 433 million monthly active users, including 188 million paying subscribers, as of June 2022."
  },
  {
    label: "Meta",
    content: "Meta Platforms, Inc., doing business as Meta and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California. The company owns Facebook, Instagram, and WhatsApp, among other products and services. "
  }
];

function App() {
  return (
    <div className="App">
      <div className='container col-6 mx-auto'>
        <Tabs tabs = { tabs }/>
      </div>
    </div>
  );
}

export default App;
