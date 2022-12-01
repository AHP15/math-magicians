import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CalculatorButton from './CalculatorButton';
import Result from './Result';

import calculate from '../logic/calculate';

import '../styles/Calculator.css';

const Calculator = ({ buttons }) => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
    text: null,
  });

  const handleClick = (buttonName) => {
    let obj = calculate(state, buttonName);

    if (obj.total && obj.next && obj.operation) {
      obj = {
        ...obj,
        text: `${obj.total} ${obj.operation} ${obj.next}`,
      };
    } else {
      obj = { ...obj, text: null };
    }

    setState(obj);
  };

  return (
    <div className="calculator">
      <Result result={state.text ?? state.total ?? state.next ?? '0'} />
      {
        buttons.map(({ text, changeBg }) => (
          <CalculatorButton
            key={text}
            text={text}
            changeBg={changeBg}
            handleClick={handleClick}
          />
        ))
      }
    </div>
  );
};

Calculator.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  buttons: PropTypes.array.isRequired,
};

export default Calculator;
