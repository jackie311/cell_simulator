import produce, { Draft } from "immer";

export const COEFF = 1.2;
export const ROW_NUM = 10;
export const COL_NUM = 20;

export function isAlive(arr: number[][], row: number, col: number) {
  if (!arr[row] || !arr[row][col]) return 0;

  const cell = arr[row][col];
  if ([1, 3].includes(cell)) return 1;
  return 0;
}

export function countNeighbors(arr: number[][], row: number, col: number) {
  let sum = 0;
  sum += isAlive(arr, row, col - 1);
  sum += isAlive(arr, row, col + 1);

  sum += isAlive(arr, row - 1, col - 1);
  sum += isAlive(arr, row - 1, col);
  sum += isAlive(arr, row - 1, col + 1);

  sum += isAlive(arr, row + 1, col - 1);
  sum += isAlive(arr, row + 1, col);
  sum += isAlive(arr, row + 1, col + 1);
  return sum;
}

export function generateNextState(currentState: number[][]) {
  return produce(currentState, (draft: Draft<number[][]>) => {
    for (let row = 0; row < ROW_NUM; row++) {
      for (let col = 0; col < COL_NUM; col++) {
        const cell = draft[row][col];
        const liveNeighbors = countNeighbors(currentState, row, col);

        if (cell === 0 && liveNeighbors === 3) draft[row][col] = 1
        if (cell === 1 && [2, 3].includes(liveNeighbors)) draft[row][col] = 1;
        if (cell === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) draft[row][col] = 0;
      }
    }
  })
}