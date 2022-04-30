import { Dispatch } from 'react';
import { ROW_NUM, COL_NUM, generateNextState } from './helper';

function next(state: number[][], cb: Dispatch<number[][]>) {
  const nextState = generateNextState(state);
  cb(nextState);
}

function reset(cb: Dispatch<number[][]>) {
  const empty = Array.from({ length: ROW_NUM })
    .map(() => Array.from({ length: COL_NUM }, () => 0));
  cb(empty)
}

interface IProd {
  setState: Dispatch<number[][]>;
  currentState: number[][];
}

export default function Buttons({
  setState,
  currentState
}: IProd) {
  return (
    <div className="Modal-Button">
      <button
        id='reset'
        className="button"
        onClick={() => reset(setState)}
      >
        <span>
          Reset
        </span>
      </button>
      <button
        className="button next"
        id=''
        onClick={() => next(currentState, setState)}
      >
        <span>
          Next Generation
        </span>
      </button>
    </div>
  )
}