import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ clickHandler }) {
  return (
    <>
      <div className="button-panel">
        <div>
          <Button name="AC" handleClick={clickHandler} color="white" />
          <Button name="+/-" handleClick={clickHandler} color="white" />
          <Button name="%" handleClick={clickHandler} color="white" />
          <Button name="÷" handleClick={clickHandler} color="#f5913e" />
        </div>
        <div>
          <Button name="7" handleClick={clickHandler} color="white" />
          <Button name="8" handleClick={clickHandler} color="white" />
          <Button name="9" handleClick={clickHandler} color="white" />
          <Button name="X" handleClick={clickHandler} color="#f5913e" />
        </div>
        <div>
          <Button name="4" handleClick={clickHandler} color="white" />
          <Button name="5" handleClick={clickHandler} color="white" />
          <Button name="6" handleClick={clickHandler} color="white" />
          <Button name="-" handleClick={clickHandler} color="#f5913e" />
        </div>
        <div>
          <Button name="1" handleClick={clickHandler} color="white" />
          <Button name="2" handleClick={clickHandler} color="white" />
          <Button name="3" handleClick={clickHandler} color="white" />
          <Button name="+" handleClick={clickHandler} color="#f5913e" />
        </div>
        <div>
          <Button name="0" handleClick={clickHandler} color="white" wide />
          <Button name="." handleClick={clickHandler} color="white" />
          <Button name="=" handleClick={clickHandler} color="#f5913e" />
        </div>
      </div>
    </>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,

};

export default ButtonPanel;
