import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Obi from '../img/Ben_Kenobi.png';

const Planet = (props) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { pathid } = useParams(); 

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://swapi.dev/api/planets/${ pathid }`)
            .then(response => {
                console.log(response.data); 
                setData(response.data);
                setIsLoading(false);
            })
            .catch( err => {
                console.log(err); 
                setData({});
                setIsLoading(false);
            });
    }, [pathid]);
    return (
        isLoading ? <p></p> :
        'name' in data ?
        <>
            <h2>ID { pathid }: { data.name }</h2>
            <p>Climate: { data.climate }</p>
            <p>Rotation Period: { data.rotation_period } hours</p>
            <p>Orbital Period: { data.orbital_period } days</p>
            <p>Diameter: { data.diameter }</p>
            <p>Terrain: { data.terrain }</p>
        </> :
        <>
            <p>No planet with that ID found</p>
            <img src={ Obi }/>
        </>
    )
}

export default Planet;