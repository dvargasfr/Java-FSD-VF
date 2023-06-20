import logo from './logo.svg';
import './App.css';
import Pokedex from './Pokedex';
import PokemonSearch from './PokemonSearch';

function App() {
  return (
    <div style={{background:"linear-gradient(135deg, rgba(29, 128, 159, 1), rgba(245, 5, 17, 0.7))",textAlign:"center"}}>
      <h1>Pokemon List</h1>
      <Pokedex></Pokedex>
      <hr style={{border:"1px solid black", width:"50%", margin:"2% auto"}}/>
      <h1>Pokemon Search</h1>
      <PokemonSearch></PokemonSearch>
    </div>
  );
}

export default App;
