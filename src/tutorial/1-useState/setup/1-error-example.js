import React from "react";

const ErrorExample = () => {
  let title = "random title";

  const handleClick = () => {
    title = "New title";
    console.log(title);
  };

  return (
    <React.Fragment className="container">
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
