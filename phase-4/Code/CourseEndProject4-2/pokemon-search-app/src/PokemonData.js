import axios from "axios";
import { useState, useEffect } from "react";

function PokemonData(props) {

    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        fetchPokemonData();
    }, []);

    const fetchPokemonData = () => {
        axios
        .get(props.pokemonurl)
        .then((response) => {
            setPokemonData(response.data);
            //console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return(
        <div>
            {pokemonData && (
                <div>
                    <h4>{pokemonData.name}</h4>        
                    <img src={pokemonData.sprites.front_default} alt={pokemonData.name}/><br/>
                    <span>CP: {pokemonData.base_experience}</span><br/>
                    <span>Attack: {pokemonData.stats[1].base_stat}</span><br/>
                    <span>Defense: {pokemonData.stats[2].base_stat}</span><br/>
                    <span>Type: {pokemonData.types[0].type.name}</span>
                </div>
            )}
        </div>
    )
}

export default PokemonData;