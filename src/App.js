
import { useState } from 'react';
import './App.css';
import Modal from './Modal/Modal';
import Content from './Modal/Content';

function App() {

const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <button className='btn' onClick={ () => setIsOpen(true)}>Open</button>

      { isOpen && 
        <Modal setIsOpen={setIsOpen}>
          <Content setIsOpen={setIsOpen}/>
        </Modal>
      }
    </div>
  );
}

export default App;
