// styles
import styles from './Stopwatch.module.css';

// hooks
import { useEffect, useReducer, useRef } from 'react';

// reducers
import { stopwatchReducer } from '../../reducers/StopwatchReducers';

export default function Stopwatch() {
  const initialState = { isRunning: false, time: 0 }
  const [state, dispatch] = useReducer(stopwatchReducer, initialState);
  const idRef = useRef(0);

  useEffect(() => {
    // check if stopwatch is running
    if (!state.isRunning) {
      return;
    }

    // start the timer
    idRef.current = setInterval(() => dispatch({type: 'TICK'}), 0.0001);

    // cleanup function
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    }
  }, [state.isRunning]);

  return (
    <div className={styles.stopwatch}>
      <h1 className={styles.timer}>{state.time}s</h1>
      <div className={styles["btn-group"]}>
        <button onClick={() => dispatch({ type: 'START' })}>Start</button>
        <button onClick={() => dispatch({ type: 'STOP' })}>Stop</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </div>
    </div>
  )
}
