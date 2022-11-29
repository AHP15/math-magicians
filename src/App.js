import React from 'react';

import Calculator from './components/Calculator';
import buttonsInfo from './buttons';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Calculator buttons={buttonsInfo} />
      </div>
    );
  }
}
