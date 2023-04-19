const reverseString = require('./reverse');

test('check if the string reverses', () => {
  expect(reverseString('pets')).toBe('step');
});
