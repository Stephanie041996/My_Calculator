import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

function App() {
  return (
    <>
      <h1>Calculator App</h1>
      <Display Calculate={Calculate} />
      <ButtonPanel />
    </>
  );
}

export default App;
