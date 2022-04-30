import './style/App.css';
import './style/Modal.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import classnames from 'classnames';
function App() {
  return (
    <div className="App">
      <Modal
        isOpen={true}
        className='Modal'
        overlayClassName="Modal--Overlay"
      >
        <div className="Modal--content">
          {Array.from({ length: 100 }, (_, i) => i).map((num, i) => (
            <span
            key={i}
            className={classnames('Modal--block', {
              active: num > 5,
            })}
          >
          </span>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default App;
