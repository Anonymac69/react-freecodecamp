import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    await axios.get(url).then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={user.id}>
              <img src={avatar_url} />
              <div>
                <h4>{login}</h4>
                <small>
                  <a href={html_url}>profile</a>
                </small>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
