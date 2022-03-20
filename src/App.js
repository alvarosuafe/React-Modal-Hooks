import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";

function App() {
  const modalTitle = `Esto es un modal`;
  const modalBody = `Lorem ipsum dolor sit amet,consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   Felis imperdiet proin fermentum leo vel orci porta non pulvinar.`;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const appTitle = `Componente modal con React`;
  const buttonTxt = `Abrir`;
  return (
    <div className="App">
      <h1 className="appHeader">{appTitle}</h1>
      <button
        className="openModal"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        {buttonTxt}
      </button>
      {/* {isModalOpen && <Modal setModalOpen={setIsModalOpen} modalTitle={modalTitle} modalBody={modalBody}/>} */}
      <Modal
        visible={isModalOpen}
        setModalOpen={setIsModalOpen}
        modalTitle={modalTitle}
        modalBody={modalBody}
      />
    </div>
  );
}

export default App;
