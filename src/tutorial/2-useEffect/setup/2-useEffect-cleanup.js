import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const checkWidth = (e) => {
    setWidth(e.target.innerWidth);
  };

  const checkHeight = (e) => {
    setHeight(e.target.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    window.addEventListener("resize", checkHeight);
    return () => {
      // returning a cleanup function that removes the eventlistener
      window.removeEventListener("resize", checkWidth);
      window.removeEventListener("resize", checkHeight);
    };
  });

  return (
    <>
      <h2>Window Height: {height}</h2>
      <h2>Window Width: {width}</h2>
    </>
  );
};

export default UseEffectCleanup;
