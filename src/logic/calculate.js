import Operate from './operate';

const Calculate = (buttonName, dataObj) => {
  let { total, next, operation } = dataObj;
  if (buttonName === '+/-') {
    total = `${total * -1}`;
    next *= -1;
  }
  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }
  if (buttonName === '=') {
    total = Operate(total, next, operation);
    next = null;
    operation = null;
  }

  if (buttonName === '.') {
    if (!total) {
      total = '0.';
    }

    if (total && !next) {
      if (operation) {
        next += '0.';
      } else if (total.indexOf('.') === -1) {
        total += '.';
      }
    }

    if (total && operation && next) {
      if (next.indexOf('.') === -1) {
        next += '.';
      }
    }
  }
  // if (buttonName === '.') {
  //   if (!total) {
  //     total = '0.';
  //   }
  //   if (total && operation) {
  //     total += '.';
  //   }
  //   if (total && next && operation) {
  //     next += '.';
  //   }
  //   if (total && operation && !next) {
  //     next = '0.';
  //   }
  // }
  if ([...Array(10)].map((_, i) => `${i}`).includes(buttonName)) {
    if (operation === null) {
      if (total === null) {
        total = buttonName;
      } else if (typeof total === 'number') {
        total = buttonName;
      } else {
        total += buttonName;
      }
    } else if (next === null) {
      next = buttonName;
    } else {
      next += buttonName;
    }
  }
  if (buttonName === '%') {
    total = (total * 0.01).toString();
    next *= 0.01;
  }
  if (['+', '-', 'X', '÷'].includes(buttonName)) {
    if (!total) {
      total = '0';
    }
    if (total && !next) {
      operation = buttonName;
    }
    if (total && next && operation) {
      total = Operate(total, next, operation);
      next = null;
      operation = buttonName;
    }
  }

  return { total, next, operation };
};

export default Calculate;
