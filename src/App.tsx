import React, { useState } from 'react';
import './App.css';
import { NewComponent, NewComponent2, topCars } from './site/NewComponent';



function App() {

  let [a, setA] = useState(1)

  const onClickHandler = () => {
    setA(++a)
    console.log(a);
  }
  const onClickHandler1 = () => {
    setA(0)
  }

  return (
    <div className='App'>
      <h1>{a}</h1>
      <button onClick={onClickHandler}>x</button>
      <button onClick={onClickHandler1}>0</button>
    </div>
  );
}

export default App;
