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
      text: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    let obj = calculate(this.state, buttonName);

    if (obj.total && obj.next && obj.operation) {
      obj = {
        ...obj,
        text: `${obj.total} ${obj.operation} ${obj.next}`,
      };
    } else {
      obj = { ...obj, text: null };
    }

    this.setState(obj);
  }

  render() {
    const { buttons } = this.props;
    const { total, next, text } = this.state;
    return (
      <div className="calculator">
        <Result result={text ?? total ?? next ?? '0'} />
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
