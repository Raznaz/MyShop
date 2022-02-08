import { isNumber } from '../isNumber';

describe('isNumber', () => {
  it('Is it number', () => {
    [0, 1, 2, -1, 1, '1'].map((n) => {
      expect(isNumber(n)).toEqual(true);
    });
  });

  it('it is NOT a number', () => {
    [false, true, NaN].map((n) => {
      expect(isNumber(n)).toEqual(false);
    });
  });
});
