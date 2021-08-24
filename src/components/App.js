import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  const render = () =>{
    return (
    <>
      <h1>Calculator App</h1>
      <Display Calculate={Calculate} />
      <ButtonPanel />
    </>
  );
  }
  
}

export default App;
