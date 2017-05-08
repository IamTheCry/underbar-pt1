const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });
  it('returns true if any value in the object is rabbit', () => {
    const animals = {
      'Franklin': 'turtle',
      'Peter': 'rabbit',
      'Arthur': 'dog'
    }
    console.log()
    expect(_.some(animals, species => species === 'rabbit')).toBe(true);
  });
});