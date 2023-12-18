import React from 'react';
// import Persons from '../assets/Data/PersonDB';

function Person({name,age,id,verified}) {
  return (
    <>
    <span style={{display: 'inline-block', padding:'22px'}}>
        <img src={`https://picsum.photos/id/${id}/200/300`} alt="randomImage" />
        <div> Name: {name} || Age: {age} {verified ? "✔" : null}</div>
    </span>
    </>
  )}


export default Person;


//This is a default template for every data which will be exported into
//PersonComponent from PersonDB


// first we import data into a component which will be rendered on the screen ...in this component we have map function for taking out the data and this map function return every data in form of a Functional component which we capture in a {} block and then finally that parent component render all of this on the screen  