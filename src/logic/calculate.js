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
  if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(buttonName)) {
    if (operation === null) {
      if (total === null) {
        total = buttonName;
      } else if (typeof total === 'number') {
        total = buttonName;
      } else {
        total += buttonName;
      }
    } else {
      next += buttonName;
    }
  }
};

export default Calculate;
