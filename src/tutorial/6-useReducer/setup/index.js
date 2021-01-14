import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const reducer = (state, action) => { }

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, {
    people: [],
    isModalOpen: false,
    modalContent: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name != '') {
      console.log('something fishy going down')
    } else {

    }
  }

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type='submit' className='btn'>add</button>
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4> {person.name} </h4>
          </div>
        )
      })}
    </>
  )
};

export default Index;
