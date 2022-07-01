import React, { Component } from 'react';

class Celcius extends Component {
    render() {
        return (
            <div>
                <h4>Celcius: {this.props.temperature} °C</h4>                
            </div>
        );
    }
}

export default Celcius;