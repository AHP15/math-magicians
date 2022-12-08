import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import CalculatorPage from '../components/CalculatorPage';

it('renders CalculatorPage correctly', () => {
  const tree = renderer
    .create(<BrowserRouter><CalculatorPage /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
