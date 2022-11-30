import React from 'react';
import PropTypes from 'prop-types';

import CalculatorButton from './CalculatorButton';
import Result from './Result';

import calculate from '../logic/calculate';

import '../styles/Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
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
    const obj = calculate(this.state, buttonName);
    this.setState(obj);
  }

  render() {
    const { buttons } = this.props;
    const { total, next } = this.state;
    return (
      <div className="calculator">
        <Result result={total ?? next ?? '0'} />
        {
          buttons.map(({ text, changeBg }) => (
            <CalculatorButton
              key={text}
              text={text}
              changeBg={changeBg}
              handleClick={this.handleClick}
            />
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
