import React from 'react';
import ListAddLinks from '../components/ListAddLinks';
import NavBar from '../components/NavBar';
import NewPlayerForm from '../components/NewPlayerForm';

const New = () => {

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <ListAddLinks />
            </div>
            <div>
                <NewPlayerForm />
            </div>
        </div>
    )
}

export default New;