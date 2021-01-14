import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {show ? <Item /> : <h3>Toggle button to see this item</h3>}

      <button className="btn" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = (e) => {
    setSize(e.target.innerWidth);
    // setSize(e);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    // returning a cleanup function
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <>
      <h2></h2>
      <h2> Window Size: {size}pixels </h2>
    </>
  );
};

export default ShowHide;
