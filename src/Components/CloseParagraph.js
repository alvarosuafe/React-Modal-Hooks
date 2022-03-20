import React from "react";
import "./components.css";

function CloseParagraph({ setModalCloseParagraph }) {
  return (
    <p onClick={() => setModalCloseParagraph(false)}>
      Un párrafo que puede cerrar el modal.
    </p>
  );
}

export default CloseParagraph;
