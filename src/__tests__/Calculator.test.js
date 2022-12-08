import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Calculator from '../components/Calculator';
import buttonsInfo from '../buttons';

it('renders Calculator correctly', () => {
  const tree = renderer.create(<Calculator buttons={buttonsInfo} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('buttons working ', async () => {
  // Arrange
  render(<Calculator buttons={buttonsInfo} />);

  // Act
  await userEvent.click(screen.getByText('1'));
  await screen.getByTitle('result');

  // Assert
  expect(screen.getByTitle('result')).toHaveTextContent('1');
});
