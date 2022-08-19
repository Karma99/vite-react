import React from 'react';
import ExampleBody from '../../../utils/ExampleBody';

function WelcomeMessage(props){
    return (
        <div className="neonText pulsateText">
            {props.children}
        </div>
    );
}

export default class ClockTicks extends React.Component{

    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }

    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick() 
        , 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({date: new Date()});
    }

    render(){
        const codeFilePath = new URL("../../../uploads/class-components/ClockTicks.txt", import.meta.url).href;

        return (
            <ExampleBody codeFilePath={codeFilePath} className="neonBg text-center">
                {/* React Containment : wrapping children elements (Topic : Composition ) */ }
                <WelcomeMessage>
                    <h1>Hello, <span className="flickerText">Earth</span>!</h1>
                    <hr/>
                    <h2>{this.state.date.toLocaleTimeString()}.</h2>
                </WelcomeMessage>
            </ExampleBody>
        );
    }
}