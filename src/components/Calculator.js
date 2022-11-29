import React from 'react';
import PropTypes from 'prop-types';

import CalculatorButton from './CalculatorButton';
import Result from './Result';

import '../styles/Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { buttons } = this.props;
    return (
      <div className="calculator">
        <Result result={0} />
        {
          buttons.map(({ text, changeBg }) => (
            <CalculatorButton key={text} text={text} changeBg={changeBg} />
          ))
        }
      </div>
    );
  }
}

Calculator.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  buttons: PropTypes.array.isRequired,
};
