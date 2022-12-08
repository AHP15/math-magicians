import operate from '../logic/operate';

test('test +', () => {
  // Arrange
  const numberOne = '1';
  const numberTwo = '2';
  const operation = '+';

  // Act
  const result = operate(numberOne, numberTwo, operation);

  // Assertion
  expect(result).toBe('3');
});

test('test -', () => {
  // Arrange
  const numberOne = '6';
  const numberTwo = '2';
  const operation = '-';

  // Act
  const result = operate(numberOne, numberTwo, operation);

  // Assertion
  expect(result).toBe('4');
});

test('test x', () => {
  // Arrange
  const numberOne = '1';
  const numberTwo = '2';
  const operation = 'x';

  // Act
  const result = operate(numberOne, numberTwo, operation);

  // Assertion
  expect(result).toBe('2');
});

test('test ÷', () => {
  // Arrange
  const numberOne = '4';
  const numberTwo = '2';
  const operation = '÷';

  // Act
  const result = operate(numberOne, numberTwo, operation);

  // Assertion
  expect(result).toBe('2');
});
