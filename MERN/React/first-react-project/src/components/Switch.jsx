import { Component } from "react";

class Switch extends Component{
    constructor(props){
        super(props);
        this.state = { position: "On" };

    }

    render(){
        return (
            <div>
                <p>The switch is { this.state.position }</p>
                <button onClick={ this.flipSwitch }>Flip Switch</button>
            </div>

        );
    }

    flipSwitch = () => {
        if(this.state.position == "On"){
            this.setState({ position: "Off"});
        } else {
            this.setState({ position: "On"});
        }
    }
}

export default Switch;