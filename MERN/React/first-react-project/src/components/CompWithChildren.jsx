import { Component } from "react";

class CompWithChildren extends Component{
    render(){
        return (
            <div>
                <h1>{ this.props.header }</h1>
                { this.props.children[1] }
            </div>
        );
    }
}

export default CompWithChildren;