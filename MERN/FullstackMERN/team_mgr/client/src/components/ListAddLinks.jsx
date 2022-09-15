import React from 'react';
import { Link } from 'react-router-dom';

const ListAddLinks = (props) => {

    return (
        <div>
            <Link to="/players/list">List</Link>  |  
            <Link to="/players/new">Add Player</Link>
        </div>
    )
}

export default ListAddLinks;