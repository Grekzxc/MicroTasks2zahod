import React, { useState } from 'react';
import './App.css';
import { NewComponent, NewComponent2, topCars } from './site/NewComponent';



function App() {

  let a = 1

  const onClickHandler = () => {
    ++a
    console.log(a);

  }

  return (
    <div className='App'>
      <h1>{a}</h1>
      <button onClick={onClickHandler}>x</button>
    </div>
  );
}

export default App;
