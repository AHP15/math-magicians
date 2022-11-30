import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class CalculatorButton extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { text, changeBg, handleClick } = this.props;
    return (
      <button
        className={text === '0' ? 'zero' : ''}
        type="button"
        style={{ backgroundColor: changeBg ? 'orange' : 'auto' }}
        onClick={() => handleClick(text)}
      >
        {text}
      </button>
    );
  }
}

CalculatorButton.propTypes = {
  text: PropTypes.string.isRequired,
  changeBg: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
