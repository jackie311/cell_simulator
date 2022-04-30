import produce, { Draft } from "immer";

export const ROW_NUM = 10;
export const COL_NUM = 25;

export function isAlive(arr: number[][], row: number, col: number) {
  if (!arr[row] || !arr[row][col]) return 0;

  const cell = arr[row][col];
  if (cell === 1) return 1;
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

/**
 * if cell is live, set value to 1, otherwise set value to 0
 * 
 * @param {number[][]} currentState 
 * @returns newState
 */
export function generateNextState(currentState: number[][]) {
  const totalRows = currentState.length;
  const totalCols = currentState[0].length;

  return produce(currentState, (draft: Draft<number[][]>) => {
    for (let row = -1; row <= totalRows; row++) {
      for (let col = -1; col <= totalCols; col++) {
        const cell = (currentState[row] && currentState[row][col]) || 0;
        const liveNeighbors = countNeighbors(currentState, row, col);

        //A Cell with 2 or 3 live neighbours lives on to the next generation.
        if (cell === 1 && [2, 3].includes(liveNeighbors)) draft[row][col] = 1;

        //A Cell with fewer than two live neighbours dies of under-population.
        //A Cell with more than 3 live neighbours dies of overcrowding.
        if (cell === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) draft[row][col] = 0;
        

        if (cell === 0 && liveNeighbors === 3) {
          let newRow = row;
          let newCol = col;
          //A Cell who "comes to life" outside the board should wrap at the other side of the board
          if ([-1, totalRows].includes(row)) newRow = totalRows - Math.abs(row);
          if ([-1, totalCols].includes(col)) newCol = totalCols - Math.abs(col);

          //An empty Cell with exactly 3 live neighbours "comes to life".
          draft[newRow][newCol] = 1;
        }
      }
    }
  })
}