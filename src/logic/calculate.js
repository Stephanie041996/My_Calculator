import Operate from './operate';

const Calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  if (buttonName == '+/-') {
    total *= -1;
    next *= -1;
  }
  if (buttonName === '=') {
    total = Operate(total, next, operation);
  }
  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }
  if (buttonName === '.') {
    if (!total) {
      total = '0.';
    } else if (total && operation) {
      total += '.';
    } else if (total && next && operation) {
      next += '.';
    } else if (total && operation && !next) {
      next = '0.';
    }
  }
};

export default Calculate;
