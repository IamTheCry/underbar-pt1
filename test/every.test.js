const _ = require('../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 6, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });
    it('returns false if not all numbers in an array are even and we test for even numbers', () => {
      const nums = [0, 2, 4, 6, 8, 10];
      expect(_.every(nums, num => num % 2 === 0)).toBe(true);
    });
    it('will return true even if trivial callback is supplied', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, num => num)).toBe(true);
    });
    it('returns true if all numbers in the array multiplied by 2 are even', () => {
      const nums = [1, 2, 3, 5, 6, 7, 15];
      expect(_.every(nums, num => num *2 % 2 === 0)).toBe(true);
    });    
  });
});