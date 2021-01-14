import React, { useState } from "react";

const useStateBasics = () => {
  const [text, setText] = useState("random title");

  function handleClick() {
    if (text === "random title") {
      setText("new title");
    } else {
      setText("random title");
    }
  }

  return (
    <React.Fragment>
      <h2> {text} </h2>
      <button type="button" className="btn" onClick={handleClick}>
        switch title
      </button>
    </React.Fragment>
  );
};

export default useStateBasics;
