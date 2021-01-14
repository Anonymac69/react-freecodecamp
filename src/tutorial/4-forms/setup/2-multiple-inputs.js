import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [people, setPeople] = useState([]);
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setUser({ ...user, [id]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.fullName && user.email && user.password) {
      const newUser = { ...user, id: new Date().getTime().toString() }
      setPeople([...people, newUser])
      setUser({ fullName: '', email: '', password: '' })
    }

  };

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Fullname : </label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              value={user.fullName}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='password'>Password : </label>
            <input
              type='password'
              id='password'
              name='password'
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>add user</button>
        </form>

        {people.map((person, index) => {
          const { id, fullName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{fullName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
