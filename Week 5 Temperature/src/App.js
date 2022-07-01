import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";
import { Container, Row, Col, Button } from "reactstrap";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CurTemperature: 0,
      show: true,
    };
  }
  Inctemperature = () => {
    this.setState({ CurTemperature: this.state.CurTemperature + 1 });
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <h1>Hava Nasıl?</h1>
          </Row>
          <Row>
            <h3>Şu an sıcaklık: {this.state.CurTemperature} derece</h3>
          </Row>
          <Row>
            <Col xs="2">
              <Button color="primary" outline onClick={this.Inctemperature}>
                Sıcaklık Arttır
              </Button>
            </Col>
          </Row>
          <Row>
            <h3>3 Birimde Sıcaklık Ölçümü</h3>
          </Row>
          <Row>
            <Col xs="4">
              <Celcius temperature={this.state.CurTemperature} />
            </Col>
            <Col xs="4">
              <Fahrenheit temperature={this.state.CurTemperature * 1.8 + 32} />
            </Col>
            <Col xs="4">
              <Kelvin temperature={this.state.CurTemperature + 273.15} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
