import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Obi from '../img/Ben_Kenobi.png';

const People = (props) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { pathid } = useParams(); 

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://swapi.dev/api/people/${ pathid }`)
            .then(response => {
                setData(response.data); 
                setIsLoading(false);
            })
            .catch( err => {
                console.log(err); 
                setData({}); 
                setIsLoading(false);
            })
    }, [pathid]);
    if (isLoading){
        return <p></p>;
    } else {
        return (
            'name' in data ?
            <>
                <h2>ID { pathid }: { data.name }</h2>
                <p>Height: { data.height }</p>
                <p>Mass: { data.mass }</p>
                <p>Hair color: { data.hair_color }</p>
                <p>Skin color: { data.skin_color }</p>
                <p>Eye color: { data.eye_color }</p>
                <p>Birth year: { data.birth_year }</p>
            </> :
            <>
                <p>No droid with that ID found</p>
                <img src={ Obi }/>
            </>
        );
    }
}

export default People;