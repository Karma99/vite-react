import {useEffect, useRef} from "react";
 
/* Custom Hook */
export default function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    /* 1) Remember the latest callback - in order. */
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    /* 2) Set up the interval. */
    useEffect(() => {
      
      function tick() {
        savedCallback.current();
      }
  
      if (delay !== null) {
        let id = setInterval(tick, delay);
        
        /* Unmount - cleanup */
        return () => clearInterval(id);
      }
    }, [delay]);
}