import React, { Component } from "react";

class MyComponent extends Component{
    render(){
        const { fName, lName } = this.props;
        return (
            <h1>{ fName } { lName }</h1>
        );
    }
}

export default MyComponent;