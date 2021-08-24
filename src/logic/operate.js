import Big from 'big.js';

let result = '';
const Operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  if (operation === '-') {
    result = num1.minus(num2);
  } else if (operation === '+') {
    result = num1.plus(num2);
  } else if (operation === '*') {
    result = num1.times(num2);
  } else if (operation === '/') {
    result = num1.div(num2);
  } else if (operation === '%') {
    result = num1.div(100);
  }

  return result;
};

export default Operate;
