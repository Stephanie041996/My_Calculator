import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  let result = ' ';
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);
  if (operation === '-') {
    result += num1.minus(num2);
  } else if (operation === '+') {
    result += num1.plus(num2);
  } else if (operation === 'X') {
    result += num1.times(num2);
  } else if (operation === '÷') {
    result += num1 / (num2);
  } else if (operation === '%') {
    result += num1.div(100);
  }

  return result;
};

export default Operate;
