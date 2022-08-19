import React, {useReducer} from "react";
import Button from 'react-bootstrap/Button';
import ExampleBody from '../../../utils/ExampleBody';
import useInterval from '../../../utils/useInterval';

const initialState = {
  isRunning: false,
  isPaused: false,
  centiseconds: 0, /* centisecond(6,000 sec) and millisecond(60,000 sec) (1 mil = 0.1 cs) */
  seconds: 0,
  minutes: 0,
  hours: 0, 
};

/* Reducer callback function */
function reducer(state, action) {
  switch (action.type) {
    case "START":
      return { ...state, isRunning: true, isPaused: false };
    case "STOP":
      return { ...state, isRunning: false, isPaused: true };
    case "RESET":
      return initialState;
    case "SET_CENTISECONDS":
      return {...state, centiseconds: action.payload.centiseconds};
    case "SET_SECONDS":
      return {...state, seconds: action.payload.seconds};
    case "SET_MINUTES":
      return {...state, minutes: action.payload.minutes};
    case "SET_HOURS":
      return {...state, minutes: action.payload.hours};
    default:
      throw new Error();
  }
}

/* Ref : https://overreacted.io/making-setinterval-declarative-with-react-hooks/ */
export default function StopWatch(){

  const codeFilePath = new URL("/uploads/hooks/StopWatch.txt", import.meta.url).href;

  const [state, dispatch] = useReducer(reducer, initialState);
  const { centiseconds, seconds, minutes, hours, isRunning, isPaused } = state;
  
  /* Call Custom Hook in order */
  useInterval(() => {
    if (!isRunning) return;

    dispatch({
      type: "SET_CENTISECONDS",
      payload: {
        centiseconds: centiseconds === 99 ? 0 : centiseconds + 1,
      },
    });
  }, 10);

  useInterval(() => {
    if (!isRunning) return;

    dispatch({
      type: "SET_SECONDS",
      payload: {
        seconds: seconds === 59 ? 0 : seconds + 1,
      },
    });
  }, 1000);

  useInterval(() => {
    if (!isRunning) return;

    dispatch({
      type: "SET_MINUTES",
      payload: {
        minutes: minutes === 59 ? 0 : minutes + 1,
      },
    });
  }, 60000);

  useInterval(() => {
    if (!isRunning) return;

    dispatch({
      type: "SET_HOURS",
      payload: {
        hours: hours === 59 ? 0 : hours + 1,
      },
    });
  }, 3600000);
  
  return (
    <ExampleBody codeFilePath={codeFilePath}>
      <p className="text-primary">
        {
          String(hours).padStart(2, "0") + " : " + 
          String(minutes).padStart(2, "0") + " : " + 
          String(seconds).padStart(2, "0") + " : " + 
          String(centiseconds).padStart(2, "0")
        }
      </p>

      {(isRunning === false) && (
        <Button variant="outline-success" className="me-3" onClick={() => dispatch({type: 'START' })}> {isPaused === true ? 'Resume' : 'Start' } </Button>
      )}

      {isRunning === true && (
        <Button variant="outline-danger" className="me-3" onClick={()  => dispatch({type: 'STOP' })}> Stop </Button>
      )}

      <Button variant="outline-warning" onClick={() => dispatch({type: 'RESET' })}> Reset </Button>
    </ExampleBody>
  );
}
