import './style/App.css';
import './style/Modal.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import classnames from 'classnames';

//coefficient is between 1 to 2, it determines the number of initial live cells
const COEFF = 1.5;
const ROW_NUM = 10;
const COL_NUM = 20;

const array = Array.from({ length: ROW_NUM }).map(() => Array.from({ length: COL_NUM }, () => Math.floor(Math.random() * COEFF)));
console.log(array)
function App() {
  return (
    <div className="App">
      <Modal
        isOpen={true}
        className='Modal'
        overlayClassName="Modal--Overlay"
      >
        <div>
          {array.map((arr: number[]) => {
            return (
              <div className="Modal--content">
                {arr.map((num: number, j: number) => {
                  return ((
                    <span
                      key={j}
                      className={classnames('Modal--block', {
                        active: num === 1,
                      })}
                    >
                    </span>
                  ))
                })}
              </div>
            )
          })}
        </div>
      </Modal>
    </div>
  );
}

export default App;
