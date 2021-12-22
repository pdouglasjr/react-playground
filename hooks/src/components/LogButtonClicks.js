import styles from './LogButtonClicks.module.css';

import { useEffect, useRef, useState } from 'react';

export default function LogButtonClicks() {
  // references
  const countRef = useRef(0); // creates a reference with an initial value of 0
  const [count, setCount] = useState(countRef.current);

  // handlers
  const handleClick = () => {
    countRef.current++;   // updated value DOES NOT trigger re-rendering of component
    setCount(countRef.current);   // updated value DOES trigger re-rendering of component
    console.log(`Clicked ${countRef.current} times`);

    const intervalID = setInterval((a, b, c) => console.log('Test'), 500, )
  }

  return (
    <div>
      <p>{countRef.current}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
