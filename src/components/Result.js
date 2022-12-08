import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ result }) => (
  <div className="result" title="result">
    <p>{result}</p>
  </div>
);

Result.propTypes = {
  result: PropTypes.string.isRequired,
};
export default Result;
