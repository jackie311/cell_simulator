import './style/App.css';
import './style/Modal.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Board from './Board';

function App() {
  return (
    <div className="App">
      <Modal
        isOpen={true}
        className='Modal'
        ariaHideApp={false}
        overlayClassName="Modal--Overlay"
      >
        <Board />
      </Modal>
    </div>
  );
}

export default App;
