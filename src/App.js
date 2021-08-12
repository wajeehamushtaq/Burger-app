import React from 'react';
import './App.css';
import Burger from './components/Burger';
import Header from './components/Header'

function App() {
  return (
    <div className="burgerContent">
      <Header />
      <br />
      <Burger />
    </div>
  );
}

export default App;
