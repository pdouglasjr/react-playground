// components
import { useEffect, useRef, useState } from 'react';

// styles
import './Counter.css';

export default function Counter({name}) {
  // state
  const [counter, setCounter] = useState(0);

  // references
  const nameRef = useRef(name);

  // handlers
  const handleClick = () => setCounter(c => c+1)

  useEffect(() => {
    nameRef.current.innerText = name;
  }, [name])

  return (
    <div>
      <h1>Hello, <span ref={nameRef}>{name}</span></h1>
      <h3>{counter}</h3>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
