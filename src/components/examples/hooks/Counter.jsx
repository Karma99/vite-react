import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import ExampleBody from '../../../utils/ExampleBody';
import codeFilePath from "../../../uploads/hooks/Counter.txt";

export default function Counter() {
    
  // Declare a new state variable "count" and a function setCount to modify the variable  
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:  
  useEffect(() => {    
    // Update the document title using the browser API   
    document.title = `Count: ${count}`;  
  }, [count]); // Performance Optimization : Only re-run the effect if count changes [re-render stops at 0 check console]

  console.log(`rendered count ${count}`);

  return (
    <ExampleBody codeFilePath={codeFilePath}>
      <p>
        You clicked <span className="text-primary">{count}</span> times.
        <Button variant="outline-primary" className="ms-3" onClick={() => setCount(0)}> &#8635; </Button>
      </p>
      <Button variant="outline-success" className="me-3" onClick={() => setCount(count + 1)}> + </Button>
      <Button variant="outline-danger" className="ms-3" onClick={()  => setCount(count > 0 ? count - 1 : 0)}> - </Button>
    </ExampleBody>
  );
}