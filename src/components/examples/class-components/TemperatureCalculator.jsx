import React from 'react';
import TemperatureInput from './TemperatureInput';
import ExampleBody from '../../../utils/ExampleBody';
import Row from 'react-bootstrap/Row';

function BoilingVerdict(props){

    if(props.celsius >= 100)    
        return <p className="text-danger">The water would boil!</p>;
    else
        return <p className="text-success">The water would not boil!</p>
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

export default class TemperatureCalculator extends React.Component{

    constructor(props){
        super(props);
        this.handleCelsiusChange    = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this); 
        
        this.state = {temperature: '', scale: 'c'};
    }
    
    handleCelsiusChange(value){
        this.setState({scale: 'c', temperature: value});
    }

    handleFahrenheitChange(temperature){
        // State Updates are Merged, state name must match with state name declared in constructor
        this.setState({scale: 'f', temperature});
    }
    
    render() {

        const codeFilePath = "../../../src/uploads/class-components/Temperature Calculator.zip";

        const scale       = this.state.scale;
        const temperature = this.state.temperature;
        const celsius     = (scale === 'f') ? tryConvert(temperature, toCelsius) : temperature;    
        const fahrenheit  = (scale === 'c') ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <ExampleBody codeFilePath={codeFilePath}>
                <Row className="mb-3">
                    <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />        
                    <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
                </Row>
                <BoilingVerdict celsius={parseFloat(celsius)} />      
            </ExampleBody>
        );
    }
} 