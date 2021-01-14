import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    const getItems = () => {
      axios
        .get(url)
        .then((res) => res.data)
        .then((user) => {
          const { login } = user;
          setUser(login);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err) {
            setIsError(true);
          }
        });
    };
    getItems();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Oops! there was an error</h2>;
  }
  return <h2> {user} </h2>;
};

export default MultipleReturns;
