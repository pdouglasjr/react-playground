// components
import { useRef } from 'react';

// styles
import styles from './StopWatch.module.css';

export default function StopWatch() {
  const countRef = useRef(0);

  return (
    <div>
      <div className={styles.timer}>
        <p>Timer: <span>{countRef.current}s</span></p>
      </div>
      <div className={styles["button-group"]}>
        <button className={styles.start}>Start</button>
        <button className={styles.stop}>Stop</button>
      </div>
    </div>
  )
}
