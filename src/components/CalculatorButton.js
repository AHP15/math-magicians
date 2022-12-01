import React from 'react';
import PropTypes from 'prop-types';

const CalculatorButton = ({ text, changeBg, handleClick }) => (
  <button
    className={text === '0' ? 'zero' : ''}
    type="button"
    style={{ backgroundColor: changeBg ? 'orange' : 'auto' }}
    onClick={() => handleClick(text)}
  >
    {text}
  </button>
);

CalculatorButton.propTypes = {
  text: PropTypes.string.isRequired,
  changeBg: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CalculatorButton;
