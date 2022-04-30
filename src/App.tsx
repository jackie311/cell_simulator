import './style/App.css';
import './style/Modal.css'
import Board from './Board';
import Modal from 'react-modal';

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
