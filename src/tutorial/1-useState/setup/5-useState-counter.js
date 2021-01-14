import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const delayCounter = () => {
    setTimeout(() => {
      // setCount(count + 1);
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section>
        <h3>Regular Counter</h3>
        <h2> {count} </h2>
        <button className="btn" onClick={() => setCount(count + 1)}>
          increase
        </button>
        <button className="btn" onClick={() => setCount(count - 1)}>
          decrease
        </button>
        <button className="btn" onClick={() => setCount(0)}>
          reset
        </button>
      </section>

      <section>
        <h2> {count} </h2>
        <button className="btn" onClick={() => delayCounter()}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
