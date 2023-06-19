import axios from "axios";
import { useState, useEffect } from "react";

function Pokedex() {
    let [pokemon,setPokemon]=useState([])
    useEffect(()=> {
        axios.get("https://pokeapi.co/api/v2/pokemon/1").then(result=> {
            console.log(result.data)
            setPokemon(result.data);
            {/*poke*/}
        }).catch(error=> {
            console.log(error)
        })
    },[])

    let loadPokeData = function() {
        /*
        for(var key in pokemon){
            console.log(key, pokemon[key]);
        }
        */
        console.log(pokemon['id'], pokemon['name']);
    }
    /*
    let product = products.map(p=><div>
        {p.images.map(img=>
            <img src={img} width="100px" height="100px"/>    
        )}
        {p.id}{p.title}{p.price}
        </div>
    )
    */
    let poke = function(){
        for(var [key, value] of pokemon){
            console.log(key, pokemon[key]);
        }
    }
    /*
        p=><div>
    {p.images.map(img=>
        <img src={img} width="100px" height="100px"/>    
    )}
    {p.id}{p.title}{p.price}
    </div>)
    */

    return(
        <div>
            <input type="button" value="Load Data" onClick={loadPokeData}/>
            <hr/>
            {/*poke*/}
        </div>
    )
}

export default Pokedex;