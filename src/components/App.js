import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';

function App() {
  return (
    <div className="My-App">
      <h1>Calculator App</h1>
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
