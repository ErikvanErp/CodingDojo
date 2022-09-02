import React from 'react';

const Box = props => {
    let boxStyle = {
        height: "150px", 
        width: "150px",
        borderRadius: "10px",
        margin: "10px",
        backgroundColor: props.color
    };

    return (
        <div key={ props.key } style={ boxStyle }></div> 
    );
}
export default Box;