const {
  add, subtract, multiply,
  divide, percentage, power, average, sqrt, floor
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

test('sqrt: sqrt(9) = 3', () => {
  expect(sqrt(9)).toBe(3);
});

test('sqrt: sqrt(0) = 0', () => {
  expect(sqrt(0)).toBe(0);
});

test('sqrt: negative number throws error', () => {
  expect(() => sqrt(-1)).toThrow('Cannot take square root of a negative number');
});

test('floor: floor(4.7) = 4', () => {
  expect(floor(4.7)).toBe(4);
});

test('floor: floor(4.1) = 4', () => {
  expect(floor(4.1)).toBe(4);
});

test('floor: floor(-2.3) = -3', () => {
  expect(floor(-2.3)).toBe(-3);
});

test('floor: floor(5) = 5', () => {
  expect(floor(5)).toBe(5);
});

test('floor: floor(0) = 0', () => {
  expect(floor(0)).toBe(0);
});