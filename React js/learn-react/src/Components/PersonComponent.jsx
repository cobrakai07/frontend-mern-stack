import React from 'react'
import Person from './Person';
import Persons from '../assets/Data/PersonDB';

function PersonComponent() {
  
  return (
    <>
    {
      Persons.map(p1=><Person name={p1.name} age={p1.age}  id ={p1.id}>
      </Person> )
    }
    </>
  )
}

export default PersonComponent;