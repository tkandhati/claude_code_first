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
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function percentage(a, b) {
  return (a / b) * 100;
}

function power(base, exp) {
  return base ** exp;
}

function average(nums) {
  return nums.reduce((sum, n) => sum + n, 0) / nums.length;
}

module.exports = {
  add, subtract, multiply,
  divide, percentage, power, average
};