import React from 'react';

import Person from './Person';
import Persons from '../assets/Data/PersonDB';

function PersonComponent() {
  
  return (
    <>
    {
      Persons.map(p1=><Person key={p1.id} name={p1.name} age={p1.age} verified={p1.verified} id ={p1.id}>
      </Person> )
    }
    </>
  )
}

export default PersonComponent;

// key={p1.id} ///this is important to make key attriburte to some unique value
//you cannot use "key" as a prop