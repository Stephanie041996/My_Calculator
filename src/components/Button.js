import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, handleClick, wide, color }) {
  return (
    <>
      <button type="button" name={name} onClick={handleClick} 
      style={{
        background: color || '#f5913e',
          width: wide ? '50%' : '25%',}}
          >{name}</button>
    </>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
