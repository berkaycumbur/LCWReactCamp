import React, { Component } from 'react';

class Kelvin extends Component {
    render() {
        return (
            <div>
                <h4>Kelvin: {this.props.temperature} °K</h4>
            </div>
        );
    }
}

export default Kelvin;