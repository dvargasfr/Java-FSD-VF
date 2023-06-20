import axios from "axios";
import { useState } from "react";
import PokemonData from './PokemonData';

function PokemonSearch() {

    const [pokemonData, setPokemonData] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [updatedTerm, setUpdatedTerm] = useState(searchTerm);

    const handleSearch = (event) => {
        setUpdatedTerm(searchTerm);
        console.log();
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${updatedTerm.toLowerCase()}`)
        .then((response) => {
            setPokemonData(response.data);
           console.log(response.data);
           DrawPokemonData();
           
        })
        .catch((error) => {
            console.log(error);
            setPokemonData(null);
        });
    };

    let DrawPokemonData = () => {
        return(
            <div>
                {pokemonData && <PokemonData pokemonurl={`https://pokeapi.co/api/v2/pokemon/${updatedTerm.toLowerCase()}`}></PokemonData>}
            </div>
            
        )
    }

    return(
        <div class="row" style={{textAlign:"center"}}>
            <div style={{marginBottom:"2%"}}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(event)=>setSearchTerm(event.target.value)}
                    placeholder="Enter Pokemon Name"
                    id="search"
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div class="row" style={{width:"20%", margin:"auto"}}>
                <DrawPokemonData></DrawPokemonData>
            </div>
            <div style={{margin:"0 auto 20% auto"}}></div>
        </div>
    );
}

export default PokemonSearch;