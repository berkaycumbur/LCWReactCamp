import React, { Component } from 'react';

class Fahrenheit extends Component {
    render() {
        return (
            <div>
                <h4>Fahrenheit: {this.props.temperature} °F</h4>                
            </div>
        );
    }
}

export default Fahrenheit;