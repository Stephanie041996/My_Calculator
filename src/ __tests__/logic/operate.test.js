import operate from '../../logic/operate';

describe('Operations', () => {
  it('Should return a string', () => {
    const res = operate('70', '7', '+');
    expect(typeof res).toEqual('string');
  });

  it('Should be a function', () => {
    expect(typeof operate).toEqual('function');
  });

  it('Should subtract two numbers value', () => {
    const res = operate('7', '70', '-');
    expect(res * 1).toEqual(-63);
  });

  it('Should add two numbers', () => {
    const res = operate('70', '7', '+');
    expect(res * 1).toBe(77);
  });

  it('Should multiply 2 numbers', () => {
    const res = operate('2', '4', 'X');
    expect(res * 1).toEqual(8);
  });

  it('Should return a divided value', () => {
    const res = operate('70', '7', '÷');
    expect(res * 1).toEqual(10);
  });
});
