import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 1) {
      document.title = `New Messages(${count})`;
    }
  }, [count]);

  return (
    <>
      <h2>UseEffect Basics</h2>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Change Message
      </button>
    </>
  );
};

export default UseEffectBasics;
