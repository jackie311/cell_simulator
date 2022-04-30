import { generateNextState } from './helper';

describe('Next Generation', () => {
  test('easy scenario', () => {
    const DataSet = [
      [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0],
      ],
    ];
    expect(generateNextState(DataSet[0])).toEqual(DataSet[1]);
    expect(generateNextState(DataSet[1])).toEqual(DataSet[2]);
    expect(generateNextState(DataSet[2])).toEqual(DataSet[3]);
    expect(generateNextState(DataSet[3])).toEqual(DataSet[4]);
  });

  test('A Cell who "comes to life" outside the board should wrap at the other side of the board', () => {
    const testData = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
    ];
    const expectResult = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    console.log(generateNextState(testData))
    expect(generateNextState(testData)).toEqual(expectResult);
  })
})
