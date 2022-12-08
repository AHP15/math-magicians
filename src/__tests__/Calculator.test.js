import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import buttonsInfo from '../buttons';

it('renders Calculator correctly', () => {
  const tree = renderer.create(<Calculator buttons={buttonsInfo} />).toJSON();
  expect(tree).toMatchSnapshot();
});
