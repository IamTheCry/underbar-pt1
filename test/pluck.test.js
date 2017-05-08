const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });
  it('returns an array of just jobs, given an array of people objects', () => {
    const people = [
      { name: 'Harry', age: 12, job: 'waxer'},
      { name: 'Larry', age: 999, job: 'plumber'},
      { name: 'Betty', age: 14, job: 'bopping'}
      //NOTE objects must all have the key for this to work, job in this case
    ];
    const result = _.pluck(people, 'job');
    expect(result).toEqual(['waxer', 'plumber', 'bopping']);
  });
});