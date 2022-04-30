import { useState, Dispatch } from 'react';
import produce, { Draft } from "immer";
import classnames from 'classnames';

import Buttons from './Buttons';
import { ROW_NUM, COL_NUM } from './helper';

const initialState =
  Array.from({ length: ROW_NUM })
    .map(() => Array.from({ length: COL_NUM }, () => 0));

function onChange(state: number[][], row: number, col: number, cb: Dispatch<number[][]>) {
  const next = produce(state, (draft: Draft<number[][]>) => {
    draft[row][col] = draft[row][col] === 1 ? 0 : 1
  });
  cb(next);
}

export default function Board() {
  const [currentState, setState] = useState<number[][]>(initialState);

  return (
    <div className='Board'>
      {currentState.map((arr: number[], i: number) =>
      (<div className="Board--content" key={i}>
        {arr.map((num: number, j: number) => {
          return (
            <span
              key={j}
              className={classnames('Board--block', {
                active: num === 1,
              })}
              onClick={() => onChange(currentState, i, j, setState)}
            >
            </span>
          )
        })}
      </div>)
      )}
      <Buttons currentState={currentState} setState={setState} />
    </div>
  )
}