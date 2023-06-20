import axios from "axios";
import { useState } from "react";
import PokemonData from './PokemonData';

function PokemonSearch() {

    const [pokemonData, setPokemonData] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
        .then((response) => {
            setPokemonData(response.data);
            /*
            const totalCount = response.data.count;
            const totalPagesCount = Math.ceil(totalCount / 10);
            setTotalPages(totalPagesCount);
            */
           console.log(response.data);
           
        })
        .catch((error) => {
            console.log(error);
            setPokemonData(null);
        });
    };

    return(
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Enter Pokemon Name"
                id="search"
            />
            <button onClick={handleSearch}>Search</button>
        
            {pokemonData && <PokemonData pokemonurl={`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`}></PokemonData>}
        </div>
    );
}

export default PokemonSearch;