import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  let switchText = () => {
    if (text === "") {
      setText("New Text");
    }
    if (text !== "") {
      setText("");
    }
  };

  return (
    <>
      <h2>
        {text ? (
          <div>
            <small>Ternary Operator returned</small> <h2>True</h2>
          </div>
        ) : (
          <h2>False</h2>
        )}
      </h2>
      <h2>first Value: {firstValue} </h2>
      <h2>second Value: {secondValue} </h2>
      <button className="btn" onClick={() => switchText()}>
        Switch Text
      </button>
    </>
  );
};

export default ShortCircuit;
