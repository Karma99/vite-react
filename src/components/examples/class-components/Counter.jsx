import React from 'react';
import Button from 'react-bootstrap/Button';
import ExampleBody from '../../../utils/ExampleBody';
import codeFilePath from "../../../uploads/class-components/Counter.txt";

export default class Counter extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }

    componentDidMount(){
      document.title = `Count: ${this.state.count} `; 
      console.log('Mount: '+1); 
    }

    componentDidUpdate(prevProps, prevState) {
      // Optimizing Performance for every re-render
      if (prevState.count !== this.state.count) {
        document.title = `Count: ${this.state.count}`;
      }
    }
  
    render() {
      console.log('Render: '+2); 
      return (
        <ExampleBody codeFilePath={codeFilePath}>
        <p>You clicked <span className="text-danger">{this.state.count}</span> times.</p>
        <Button variant="outline-danger" onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
        </Button>
        </ExampleBody>
      );
    }
  }