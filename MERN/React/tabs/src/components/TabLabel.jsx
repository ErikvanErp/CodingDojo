import React, { useState } from 'react';

const TabLabel = props => {
    const bgc = props.active? "yellow" : "white"; 

    let labelStyle = {
        height: "40px", 
        width: "100px",
        border: "solid black 1px",
        marginRight: "5px",
        textAlign: "center",
        backgroundColor: bgc
    };

    const onClickHandler = (e, tab) => {
        props.onClickTab(tab);
    }
    return (
        <button style={ labelStyle } onClick={ (e) => onClickHandler(e, props.tab)}>
            { props.tab.label }
        </button>        
    )
}
export default TabLabel;