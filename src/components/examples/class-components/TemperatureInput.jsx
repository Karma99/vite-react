import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const scaleNames = {  c: 'Celsius',  f: 'Fahrenheit'};

export default class TemperatureInput extends React.Component{

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    const name = scaleNames[scale].toLowerCase();    
    
    return (
      <Form.Group as={Col} controlId={name}>
        <Form.Label>Enter temperature in {scaleNames[scale]}:</Form.Label>
        <Form.Control name={name} type="text" value={temperature} onChange={this.handleChange} />
      </Form.Group>
    );
  }
}