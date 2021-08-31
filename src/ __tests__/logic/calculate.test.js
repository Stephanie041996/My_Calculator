import Calculate from '../../logic/calculate';

const calculate1 = { total: null, next: null, operation: null };
const calculate2 = { total: '7', next: null, operation: null };

it('Total should be a number', () => {
  const res = Calculate(7, calculate2);
  const val = res.total * 1;
  expect(typeof val).toEqual('number');
});

it('Should return an object', () => {
  const res = Calculate(7, calculate1);
  expect(typeof res).toEqual('object');
});

it('Should return object with null for each value', () => {
  const res = Calculate('AC', calculate1);
  expect(res).toEqual({ next: null, operation: null, total: null });
});

it('Should return a float value', () => {
  const res = Calculate('.', calculate1);
  expect(res).toEqual({ next: null, operation: null, total: '0.' });
});

it('Should return a percent value', () => {
  const res = Calculate('%', calculate2);
  expect(res).toStrictEqual({ next: 0, operation: null, total: '0.07' });
});

it('Should return a negative value', () => {
  const res = Calculate('=', { total: '7', next: '10', operation: '-' });
  expect(res.total * 1).toEqual(-3);
  expect(res.next).toEqual(null);
  expect(res.operation).toEqual(null);
});

it('should return -ve value', () => {
  const res = Calculate('+/-', calculate2);
  expect(res.total).toBe('-7');
});

it('Should return a result of multiplication', () => {
  const res = Calculate('=', { total: '7', next: '10', operation: 'X' });
  expect(res.total * 1).toEqual(70);
  expect(res.next).toEqual(null);
  expect(res.operation).toEqual(null);
});

it('Multiplying positive number is not zero', () => {
  const result = Calculate('=', { total: '2', next: '2', operation: 'X' });
  const value = result.total * 1;
  expect(value).not.toEqual(0);
});

it('Should return a result of subtraction', () => {
  const res = Calculate('=', { total: '7', next: '10', operation: '-' });
  expect(res.total * 1).toEqual(-3);
  expect(res.next).toEqual(null);
  expect(res.operation).toEqual(null);
});

it('Should return a result of the division', () => {
  const res = Calculate('=', { total: '7', next: '10', operation: '÷' });
  expect(res.total * 1).toEqual(0.7);
  expect(res.next).toEqual(null);
  expect(res.operation).toEqual(null);
});

it('Should return a result of the addition', () => {
  const res = Calculate('=', { total: '7', next: '10', operation: '+' });
  expect(res.total * 1).toEqual(17);
  expect(res.next).toEqual(null);
  expect(res.operation).toEqual(null);
});

it('Adding positive number is not zero', () => {
  const result = Calculate('=', { total: '2', next: '2', operation: '+' });
  expect(result.total * 1).not.toBe(0);
  expect(result.next).not.toBe(0);
  expect(result.operation).not.toBe('+');
});
