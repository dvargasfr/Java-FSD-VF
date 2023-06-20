import axios from "axios";
import { useState, useEffect } from "react";
import PokemonData from './PokemonData';
import PokemonSearch from "./PokemonSearch";

function Pokedex() {

    const [searchTerm, setSearchTerm] = useState("");
    const [pokemonData, setPokemonData] = useState(null);
    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchPokemonList();
    }, [currentPage]);

    const fetchPokemonList = () => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon?offset=${(currentPage - 1) * 10}&limit=10`)
        .then((response) => {
            setPokemonList(response.data.results);
            console.log("currentPage",currentPage);
            console.log(`https://pokeapi.co/api/v2/pokemon?offset=${(currentPage - 1) * 10}&limit=10`);
            setTotalPages(Math.ceil(response.data.count / 10));
            DrawPokemonList();
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const DrawPokemonList = () => {
        return (
            <div class="row" style={{textAlign:"center"}}>
                {pokemonList.map((pokemon) => (
                    <div id={pokemon.name} key={pokemon.name} style={{width:"20%", marginBottom:"2%"}}>
                        <PokemonData pokemonurl={pokemon.url}></PokemonData>
                    </div>
                ))}
                <div id="pagination">
                    <button disabled={currentPage === 1} onClick={handlePreviousPage} id="previous">
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button disabled={currentPage === totalPages} onClick={handleNextPage} id="next">
                        Next
                    </button>
                </div>
                    
            </div>
        )
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };
    
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <div class="container">
            <DrawPokemonList></DrawPokemonList> 
        </div>
    );
}

export default Pokedex;