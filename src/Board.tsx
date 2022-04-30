import { useState, useEffect, Dispatch } from 'react';
import classnames from 'classnames';

import { ROW_NUM, COL_NUM, COEFF, generateNextState } from './helper';

//coefficient is between 1 to 2, it determines the number of initial live cells
//coefficient = 1 means no live cells

const array =
  Array.from({ length: ROW_NUM })
    .map(() => Array.from({ length: COL_NUM }, () =>
      Math.floor(Math.random() * COEFF)
    ));

function next(state: number[][], cb: Dispatch<number[][]>) {
  const nextState = generateNextState(state);
  cb(nextState);
}

function reset(cb: Dispatch<number[][]>) {
  const empty = Array.from({ length: ROW_NUM })
    .map(() => Array.from({ length: COL_NUM }, () => 0));
  cb(empty)
}

export default function Board() {
  const [currentState, setState] = useState<number[][]>(array);
  // useEffect(() => {
  //   const nextState = generateNextState(currentState)
  //   setState(nextState)
  // }, [])

  return (
    <div>
      {currentState.map((arr: number[], i: number) =>
      (<div className="Modal--content" key={i}>
        {arr.map((num: number, j: number) => {
          return (
            <span
              key={j}
              className={classnames('Modal--block', {
                active: num === 1,
              })}
            >
              {num}
            </span>
          )
        })}
      </div>)
      )}
      <div className="Modal-Button">
        <button
          className="button"
          onClick={() => reset(setState)}
        >
          <span>
            Reset
          </span>
        </button>
        <button
          className="button"
          onClick={() => next(currentState, setState)}
        >
          <span>
            Next
          </span>
        </button>
      </div>
    </div>
  )
}