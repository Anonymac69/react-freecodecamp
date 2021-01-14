import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Michael",
    location: "Lekki",
    job: "Web Developer",
  });

  const changeName = () => {
    // single state value { name } changed
    setPerson({ ...person, name: "Samantha" });
  };

  return (
    <>
      <h3> {person.name} </h3>
      <h3> is a {person.job} </h3>
      <h3> based in {person.location} </h3>
      <button className="btn" onClick={changeName}>
        Change Name
      </button>
    </>
  );
};

export default UseStateObject;
