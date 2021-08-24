import React from 'react';
import PropTypes from 'prop-types';

function Display({ Calculate }) {
  return (
    <>
      <div className="display-result">
        <input id="result" value={Calculate || '0'} />
      </div>
    </>
  );
}

Display.propTypes = {
  Calculate: PropTypes.string.isRequired,
};
export default Display;
