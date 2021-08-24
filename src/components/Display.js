import React from 'react';
import PropTypes from 'prop-types';

function Display({ Calculate }) {
  return (
    <>
      <input id="result" value={Calculate || '0'} />
    </>
  );
}

Display.propTypes = {
  Calculate: PropTypes.string.isRequired,
};
export default Display;
