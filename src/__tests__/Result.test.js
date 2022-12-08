import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Result from '../components/Result';

it('renders Result correctly', () => {
  const tree = renderer
    .create(<BrowserRouter><Result /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
