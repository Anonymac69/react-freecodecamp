import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (fullname && email && password) {
      const person = { id: new Date().getTime().toString(), fullname, email };
      setPeople((people) => {
        return [...people, person]
      });
      setFullname('');
      setEmail('');
      setPassword('');
      console.log(people)
    } else { console.log('empty values detected') }
  }



  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>

          <div className="form-control">
            <label htmlFor="fullname">Name : </label>
            <input className="" type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input className="" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form-control">
            <label htmlFor="password">Password : </label>
            <input className="" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type='submit' className='btn'>Submit</button>
        </form>
        {
          people.map((person) => {
            const { id, fullname, email } = person;
            return <div className='item' key={id}>
              <h4> {fullname} </h4>
              <h4> {email} </h4>
            </div>
          })
        }


      </article>
    </>
  );
};

export default ControlledInputs;
