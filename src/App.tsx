import React, { useState } from 'react';
import './App.css';
import { NewComponent, NewComponent2, topCars } from './site/NewComponent';



function App() {
  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])

  const [filter, setFilter] = useState<nameButtonType>('all')

  let currentMoney = money
  if (filter === 'RUBLS') {
    currentMoney = money.filter(fM => fM.banknots === 'RUBLS')
  } if (filter === 'Dollars') {
    currentMoney = money.filter(fM => fM.banknots === 'Dollars')
  }
  type nameButtonType = 'all' | 'RUBLS' | 'Dollars'
  const allButtonHandler = (nameButton: nameButtonType) => {
    setFilter(nameButton)
  }
  return (
    <>
      <ul>
        {currentMoney.map((objFromMoneyArr, index) => {
          return (
            <li key={index}>
              <span> {objFromMoneyArr.banknots} </span>
              <span> {objFromMoneyArr.value} </span>
              <span> {objFromMoneyArr.number} </span>
            </li>
          )
        })}
      </ul>
      <div>
        <button onClick={() => allButtonHandler('all')}>all</button>
        <button onClick={() => allButtonHandler('RUBLS')}>Rubls</button>
        <button onClick={() => allButtonHandler('Dollars')}>Dollars</button>
      </div>
    </>
  );
}

export default App;
