import Calculator from './Calculator';
import NavBar from './NavBar';
import buttonsInfo from '../buttons';

const CalculatorPage = () => (
  <>
    <NavBar />
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '100px',
    }}
    >
      <h2>You want to do some math?</h2>
      <Calculator buttons={buttonsInfo} />
    </div>
  </>
);

export default CalculatorPage;
