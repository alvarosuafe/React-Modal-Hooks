import React from "react";
import "./components.css";
import CloseButton from "./CloseButton";
//import CloseParagraph from "./CloseParagraph";

/**
 * This is a component that return a modal interface
 */

function Modal(props) {
  return props.visible ? (
    <article className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <div className="closeButton">
            <CloseButton setModalCloseButton={props.setModalOpen} />
          </div>
        </div>
        <div className="title">
          <h1>{props.modalTitle}</h1>
        </div>
        <div className="body">
          <p>{props.modalBody}</p>
          <span
            className="closeParagraph"
            onClick={() => props.setModalOpen(false)}
          >
            Caja que cierra el modal
          </span>
        </div>
      </div>
    </article>
  ) : null;
}

export default Modal;
