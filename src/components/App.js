/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';
import '../App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const calculation = Calculate(buttonName, this.state);
    this.setState({
      total: calculation.total,
      next: calculation.next,
      operation: calculation.operation,
    });
  }

  render() {
    const { next, total } = this.state;
    return (
      <>
        <h1>Calculator App</h1>
        <Display calculation={next || total} />
        <ButtonPanel clickHandler={(e) => this.handleClick(e.target.innerText)} />
      </>
    );
  }
}

export default App;
