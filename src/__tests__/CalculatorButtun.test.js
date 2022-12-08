import renderer from 'react-test-renderer';

import CalculatorButtun from '../components/CalculatorButton';

it('renders CalculatorButtun correctly', () => {
  const tree = renderer.create(<CalculatorButtun text="1" changeBg={false} handleClick={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
