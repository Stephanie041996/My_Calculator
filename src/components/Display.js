import React from 'react';
import PropTypes from 'prop-types';

function Display({ calculation }) {
  return (
    <>
      <div className="display-result">
        <input id="result" defaultValue={calculation} />
      </div>
    </>
  );
}
Display.defaultProps = {
  calculation: '0',
};
Display.propTypes = {
  calculation: PropTypes.string,
};
export default Display;
