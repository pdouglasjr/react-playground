// React components
import { useEffect, useRef } from 'react';

// styles
import styles from './AccessingElement.module.css';

export default function AccessingElement() {
  // reference
  const elementRef = useRef();

  useEffect(() => {
    const divElement = elementRef.current;
    console.log(divElement); // logs <div>I'm an element</div>
  }, [])

  return (
    <div ref={elementRef}>
      I'm an element
    </div>
  )
}
