import axios from "axios";
import { useState, useEffect } from "react";
import PokemonData from './PokemonData';

function Pokedex() {

    const [searchTerm, setSearchTerm] = useState("");
    const [pokemonData, setPokemonData] = useState(null);
    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchPokemonList();
    }, [currentPage]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const handleSearch = () => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
        .then((response) => {
            setPokemonData(response.data);
            const totalCount = response.data.count;
            const totalPagesCount = Math.ceil(totalCount / 10);
            setTotalPages(totalPagesCount);
        })
        .catch((error) => {
            console.log(error);
            setPokemonData(null);
        });
    };

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
            <div>
                {pokemonList.map((pokemon) => (
                    <div id={pokemon.name} key={pokemon.name}>
                        <PokemonData pokemonurl={pokemon.url}></PokemonData>
                    </div>
                ))}
    
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Enter Pokemon Name"
                    id="search"
                />
                <button onClick={handleSearch}>Search</button>
        
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
        <DrawPokemonList></DrawPokemonList>
        /*
        <div>
            {pokemonList.map((pokemon) => (
                <div id={pokemon.name}>
                    <PokemonData pokemonurl={pokemon.url}></PokemonData>
                </div>
            ))}

            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Enter Pokemon Name"
                id="search"
            />
            <button onClick={handleSearch}>Search</button>
    
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
        */ 
    );


    /*
    let [pokemon,setPokemon]=useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [pokemonData, setPokemonData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const handleSearch = () => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
        .then((response) => {
            setPokemonData(response.data);
            const totalCount = response.data.count;
            const totalPagesCount = Math.ceil(totalCount / 10);
            setTotalPages(totalPagesCount);
        })
        .catch((error) => {
            console.log(error);
            setPokemonData(null);
        });
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Enter Pokemon Name"
                id="search"
            />
            <button onClick={handleSearch}>Search</button>
    
            {pokemonData && (
                <div>
                    <h2 id="name">{pokemonData.name}</h2>
                    <img
                        src={pokemonData.sprites.front_default}
                        alt={pokemonData.name}/>
                    <p>CP: {pokemonData.base_experience}</p>
                    <p>Attack: {pokemonData.stats[1].base_stat}</p>
                    <p>Defense: {pokemonData.stats[2].base_stat}</p>
                    <p>Type: {pokemonData.types[0].type.name}</p>
                </div>
            )}

            <div id="pagination">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
                    id="previous">Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
                    id="next">Next
                </button>
            </div>
        </div>
    );
    */
}

export default Pokedex;