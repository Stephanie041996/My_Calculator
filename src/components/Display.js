import React from 'react';
import PropTypes from 'prop-types';

function Display({ calculation }) {
  return (
    <>
      <input id="result" value={calculation || '0'} />
    </>
  );
}

Display.propTypes = {
  calculation: PropTypes.string.isRequired,
};
export default Display;
