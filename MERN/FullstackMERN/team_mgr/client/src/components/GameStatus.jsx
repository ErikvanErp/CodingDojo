import React, { useEffect, useState} from 'react';
import axios from 'axios';
import GameStatusButton from './GameStatusButton';


const GameStatus = (props) => {
    const gameIdx = parseInt(props.game) - 1;
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
            <td>
                <GameStatusButton player={ player } gameIdx={ gameIdx } type={ 1 } />
                <GameStatusButton player={ player } gameIdx={ gameIdx } type={ -1 }/>
                <GameStatusButton player={ player } gameIdx={ gameIdx } type={ 0 }/>
            </td>
        </tr>
    );

    return (
        <table>
            <thead>
                <tr>
                    <td>Team Name</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                { playerList }
            </tbody>
        </table>
    )
}

export default GameStatus;
