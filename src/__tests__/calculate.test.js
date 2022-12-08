import calculate from '../logic/calculate';

test('test buttunName = AC', () => {
  // Arrange
  const obj = {
    total: '5',
    next: '6',
    operation: null,
  };
  const buttonName = 'AC';

  // Act
  const result = calculate(obj, buttonName);

  // Assertion
  expect(result).toEqual({
    total: null,
    next: null,
    operation: null,
  });
});
