import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import GameSelector from '../components/GameSelector';
import GameStatus from '../components/GameStatus';
import NavBar from '../components/NavBar';

const Game = () => {
    const { num } = useParams();

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <h1> Player Status - Game { num } </h1>
            <div>
                <GameSelector />
            </div>
            <GameStatus game={ num } />
        </div>
    )
}

export default Game;