import React from 'react';
import ExampleBody from '../../../utils/ExampleBody';
import Button from 'react-bootstrap/Button';
import codeFilePath from "../../../uploads/class-components/Toggle.txt";

export default class Toggle extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback    
        this.handleClick = this.handleClick.bind(this, new Date().toLocaleTimeString());  
    }
    
    handleClick(t) {    
        this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn }));  
    }
    
    render() {
        return (
            <ExampleBody codeFilePath={codeFilePath}>                      
                <Button onClick={this.handleClick} variant={this.state.isToggleOn ? 'success' : 'danger'}>
                    {this.state.isToggleOn ? 'On' : 'Off'}
                </Button> 
            </ExampleBody>            
        );
    }
}