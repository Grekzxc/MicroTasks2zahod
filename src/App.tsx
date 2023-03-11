import React from 'react';
import './App.css';
import { Body } from './site/Body';
import { Footer } from './site/Footer';
import { Header } from './site/Header';

function App() {
  return (
    <div>
      <Header title={'New Header'} />
      <Body title={'Body Header'} />
      <Footer title={'Footer Header'} />
    </div>
  );
}

export default App;
