import React, { useEffect, useState} from 'react';
import axios from 'axios';
import DeletePlayerButton from './DeletePlayerButton';

const PlayerList = (props) => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/players")
            .then(res => {
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    const removeFromDOM = (id) => {
        setPlayers(players.filter(p => p._id !== id));
    }  

    const playerList = players.map( (player, idx) => 
            <tr key={ idx }>
                <td>{ player.name }</td>
                <td>{ player.position }</td>
                <td><DeletePlayerButton player={ player } successAction={ () => removeFromDOM(player._id) } /></td>
            </tr>
    );

    return (
        <table>
            <thead>
                <tr>
                    <td>Team Name</td>
                    <td>Preferred Position</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                { playerList }
            </tbody>
        </table>
    )
}

export default PlayerList;
