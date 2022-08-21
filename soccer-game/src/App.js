import './App.css';
import manU from "./manU.png";
import chelsea from "./chelsea.png";
import Team from './components/Team';

// logo are from web search, only using for educational purpose. 

function App() {
  return (
    <div className="App">
      <Team 
        name={"Manchester United"} 
        logo={manU}
        goalChance = {0.95} // 5% in goal scoring chance everytime it shoot
      />
      <Team 
        name={"Chealse"} 
        logo={chelsea}
        goalChance = {0.90} // 10% in goal scoring chance
      />
    </div>
  );
}

export default App;

