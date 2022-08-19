import React from 'react';
import Button from 'react-bootstrap/Button';
import ExampleBody from '../../../utils/ExampleBody';
        
function ListItem(props) {
    // Correct! There is no need to specify the key here:  
    return <li id={props.id}>{props.title} : {props.value}</li>;
}

function NumberList(props) 
{
    const numbers = props.numbers;
    
    return (
        <ul>
            {numbers.map((number) => 
                <ListItem key={number.id.toString()} id={number.id} value={number.content} title={number.title}/>
            )}
        </ul>  
    );
}

function WarningBanner(props) {
   // Preventing Component from Rendering
    if (!props.warn) {  return null;  }
   
    const warningTypes = [
        {id: 1, title: 'High',   content: 'New bug reported. Please check and resolve.'},
        {id: 2, title: 'Medium', content: 'Discussion required for new module.'},
        {id: 3, title: 'Low',    content: 'Add a new banner for home page.'}
    ];
    return (
        <NumberList numbers={warningTypes} />
    );
}

function Dailog(props){
    return (
        <div className="dialog">
            <div className="warning">
                {props.warning}
            </div>
            <div>
                {props.button}
            </div>
        </div>
    );
}

export default class Warning extends React.Component{

    constructor(props){
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render(){   
        const codeFilePath = new URL("/uploads/class-components/Warning.txt", import.meta.url).href;

        return (
            <ExampleBody codeFilePath={codeFilePath}>
                {/* React Containment : without using props.children (Topic : Composition ) */}
                <Dailog 
                    warning={<WarningBanner warn={this.state.showWarning} />}
                    button={
                        <Button onClick={this.handleToggleClick} variant={this.state.showWarning ? 'danger' : 'success'}>
                            {this.state.showWarning ? 'Hide' : 'Show'}
                        </Button>
                    }
                />
            </ExampleBody>
        );
    }
}