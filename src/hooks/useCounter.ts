import React from 'react'
import { useState } from "react";

export const useCounter = () => {

    const [count, setCount] = useState<number>(0);
    const handleCount = () => setCount(count+1);
  return (
    <>
      <button onClick={handleCount}>Click Me</button>
      <p>Count {count}</p>
    </>

  );
}
