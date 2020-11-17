import React, { Component } from "react";

class Timer extends Component{
    state=[];
    render() {
        return(
            <div>
                {this.props.date  && this.props.date}
            </div>
        );   
    }
    
}
export default Timer;