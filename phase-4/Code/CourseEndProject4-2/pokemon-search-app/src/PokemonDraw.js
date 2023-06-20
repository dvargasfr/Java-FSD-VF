function PokemonSearch(props) {

    return (
        <div>
            {props.pokemonlist.map((pokemon) => (
                <div id={pokemon.name} key={pokemon.name}>
                    <PokemonData pokemonurl={pokemon.url}></PokemonData>
                </div>
            ))}
        </div>
    );
}