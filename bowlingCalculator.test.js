const bowlingScoreHandler = require('./bowlingCalculator');

describe('Bowling Score Calculator', () => {
  test('Given scenarios in the task problem equal the expected output', () => {
    expect(bowlingScoreHandler([4, 5, 'X', 8])).toEqual([9, null, null]);
    expect(bowlingScoreHandler([4, 5, 'X', 8, 1])).toEqual([9, 19, 9]);
  });

  test('Examples with strikes calculate accurately', () => {
    expect(bowlingScoreHandler(['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'])).toEqual([30, 30, 30, 30, 30, 30, 30, 30, 30, 30]);
    expect(bowlingScoreHandler(['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'])).toEqual([30, 30, 30, 30, 30, 30, 30, 30, null, null]);
    expect(bowlingScoreHandler(['X', 'X', 5, 4])).toEqual([25, 19, 9]);
  });

  test('Examples with spares calculate accurately', () => {
    expect(bowlingScoreHandler([7, '/', 4])).toEqual([14, null]);
    expect(bowlingScoreHandler([7, '/', 4, 2])).toEqual([14, 6]);
  });

  test('Examples with regular frames calculate accurately', () => {
    expect(bowlingScoreHandler([4, 5, 8])).toEqual([9, null]);
    expect(bowlingScoreHandler([6, 2])).toEqual([8]);
    expect(bowlingScoreHandler([0,2,4,3,9,0,8,1,3,4,6,2,1,0,9,0,5,3,0,9])).toEqual([2,7,9,9,7,8,1,9,8,9]);
  });

  test('Complex examples with strikes, spares, and regular frames calculate accurately', () => {
    expect(bowlingScoreHandler(['X', 1, '/'])).toEqual([20, null]);
    expect(bowlingScoreHandler([1, '/', 5, 3, 'X', 8, '/', 0, 4, 'X', 9, '/', 7])).toEqual([15, 8, 20, 10, 4, 20, 17, null]);
  });
});
