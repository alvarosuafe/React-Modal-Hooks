import React from "react";
import "./components.css";
//import closeImg from "../Img/close.png";
import { AiFillCloseCircle } from "react-icons/ai";

/**
 * This component returns a component to closed his parent
 */
const fontStyles = { color: "red", fontSize: "24" };

function CloseButton({ setModalCloseButton }) {
  return (
    <AiFillCloseCircle
      style={fontStyles}
      onClick={() => setModalCloseButton(false)}
    />
    //<img className='closeModal' src={closeImg} alt="Close"/>
    //<div className='closeModal'>X</div>
  );
}

export default CloseButton;
