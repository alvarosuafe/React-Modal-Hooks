import { useState } from 'react';
import './App.css';
import Modal from './Components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const appTitle = `Componente modal con React`
  const buttonTxt = `Abrir`;
  return (
    <div className="App">
      <h1 className='appHeader'>{appTitle}</h1>
      <button className="openModal" onClick={() => {setIsModalOpen(true);}}>{buttonTxt}</button>
      {isModalOpen && <Modal setModalOpen={setIsModalOpen}/>}
    </div>
  );
}

export default App;