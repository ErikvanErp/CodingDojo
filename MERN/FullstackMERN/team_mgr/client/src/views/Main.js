import React from 'react';
import ListAddLinks from '../components/ListAddLinks';
import NavBar from '../components/NavBar';
import PlayerList from '../components/PlayerList';

const Main = () => {

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <ListAddLinks />
            </div>
            <div>
                <PlayerList />
            </div>
        </div>
    )
}

export default Main;