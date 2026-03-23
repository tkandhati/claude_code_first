const {
  add, subtract, multiply,
  divide, percentage, power, average
} = require('./calculator');

test('add: 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);                  // will PASS ✓
});

test('divide by zero throws error', () => {
  expect(() => divide(10, 0)).toThrow();      // will FAIL ✗
});

test('percentage: 50 of 200 = 25', () => {
  expect(percentage(50, 200)).toBe(25);       // will FAIL ✗
});

test('power: 2 ^ 8 = 256', () => {
  expect(power(2, 8)).toBe(256);              // will FAIL ✗
});

test('average of [1,2,3] = 2', () => {
  expect(average([1, 2, 3])).toBe(2);         // will FAIL ✗
});