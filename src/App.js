import React from 'react';

import Calculator from './components/Calculator';
import buttonsInfo from './buttons';

const App = () => (
  <div>
    <Calculator buttons={buttonsInfo} />
  </div>
);

export default App;
