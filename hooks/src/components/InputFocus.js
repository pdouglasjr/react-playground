// components
import { useEffect, useRef } from 'react';

// styles
import styles from './InputFocus.module.css'

export default function InputFocus() {
  const inputRef = useRef();
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Focused"
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Not focused"
      />
    </div>
  )
}
