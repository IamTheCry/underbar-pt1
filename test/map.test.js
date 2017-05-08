const _ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });
  it('maps every number in an array of numbers to themselves + 1', () => {
        const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el + 1);
    expect(mappedArr).toEqual([2, 3, 4, 5, 6]);
  })
});