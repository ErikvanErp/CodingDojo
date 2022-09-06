import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [names, setNames] = useState([]);

    const fetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
             .then(response => setNames(response.data.results.map( pokemon => pokemon.name )))
        // fetch("https://pokeapi.co/api/v2/pokemon")
        //     .then(response => response.json())
        //     .then(response => setNames(response.results.map( pokemon => pokemon.name )))
            .catch(err => console.log(err));
    }

    const pokemons = names.map( (name, idx) => 
            <li key={ idx }>{ name }</li>
        );

    return (
        <>
            <div className='row'>
                <div className='col'>
                    <button onClick={ fetchPokemon } className='btn btn-primary my-3' style={{width:"200px"}}>Fetch Pokemon</button>
                    <ul>
                        { pokemons }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Pokemon;