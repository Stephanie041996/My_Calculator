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

 handleClick = (buttonName) => {
   const calculation = Calculate(buttonName, this.state);
   this.state({
     total: calculation.total,
     next: calculation.next,
     operation: calculation.operation,
   });
 }

   render = () => {
     const { next, total } = this.state;
     return (
       <>
         <h1>Calculator App</h1>
         <Display Calculate={next || total} />
         <ButtonPanel clickHandler={(e) => this.handleClick(e.target.innerText)} />
       </>
     );
   }
}

export default App;
