function add(a, b) {
  return a + b;               // correct ✓
}

function subtract(a, b) {
  return a - b;               // correct ✓
}

function multiply(a, b) {
  return a * b;               // correct ✓
}

function divide(a, b) {
  return a / b;              // BUG 1: no zero check → returns Infinity
}

function percentage(a, b) {
  return (a / b) / 100;      // BUG 2: should be * not /
}

function power(base, exp) {
  return base ^ exp;         // BUG 3: ^ means XOR in JS, not power!
}

function average(nums) {
  return nums[0] / nums.length;  // BUG 4: not summing all numbers
}

function sqrt(n) {
  if (n < 0) throw new Error('Cannot take square root of a negative number');
  return Math.sqrt(n);
}

function floor(n) {
  return Math.floor(n);
}

module.exports = {
  add, subtract, multiply,
  divide, percentage, power, average, sqrt, floor
};