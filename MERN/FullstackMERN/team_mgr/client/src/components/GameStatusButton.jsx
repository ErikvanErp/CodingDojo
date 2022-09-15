import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GameStatusButton = (props) => {
    const { player, gameIdx, type } = props;
    const navigate = useNavigate();

    const updateStatus = () => {
        const newGames = player.games;
        newGames[gameIdx] = type;

        axios.put("http://localhost:8000/api/players/" + player._id, { games : newGames})
            .then(res => navigate("/status/game/" + (gameIdx + 1)))
            .catch(err => console.log(err));
    }
    
    let btnText = "";
    let btnColor = ""
    switch (type){
        case -1: 
            btnText = "Not Playing";
            btnColor = "red";
            break;
        case 0: 
            btnText = "Undecided"; 
            btnColor = "yellow";
            break;
        case 1: 
            btnText = "Playing";
            btnColor = "green";
    }
    
    const btnStyle = { 
        backgroundColor: player.games[gameIdx] == type ? btnColor : "white",
        width: "100px",
        margin: "0 10px 0 0"  
    };

    return (
        <button onClick={ updateStatus } style={ btnStyle }>
            { btnText }
        </button>
    )
}

export default GameStatusButton;