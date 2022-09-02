import React from 'react';

const ColorDisplay = props => {
    let boxStyle = {
        height: "150px", 
        width: "150px",
        borderRadius: "10px",
        margin: "10px"
    };

    const colorBoxes = props.colors.map( (color, i) => 
        <div key={ i } style={{...boxStyle, backgroundColor: color }}></div> 
    );
    
    return (
        <div className="row mt-3">
            { colorBoxes }
        </div>
    );
}
export default ColorDisplay;