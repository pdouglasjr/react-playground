// components
import { useEffect, useRef, useState } from 'react';

// styles
import styles from './StopWatch.module.css';

export default function StopWatch() {
  // states
  const [count, setCount] = useState(0);
  
  // references
  const timerIdRef = useRef(0);

  // handlers
  const startHandler = () => {
    if (timerIdRef.current) { return; }
    timerIdRef.current = setInterval(() => setCount(c => c + 1), 1000); // returns a reference of the timer
    // timerIdRef is a reference is used to store the infrastructure data, e.g. the timer ID
  }

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  }

  const resetHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
    setCount(0);
  }

  // cleanup function - stop the timer if the component unmounts
  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, [])

  return (
    <div>
      <div className={styles.timer}>
        <p>Timer: <span>{count}s</span></p>
      </div>
      <div className={styles["button-group"]}>
        <button className={styles.start} onClick={startHandler}>Start</button>
        <button className={styles.stop} onClick={stopHandler}>Stop</button>
        <button className={styles.reset} onClick={resetHandler}>Reset</button>
      </div>
    </div>
  )
}
