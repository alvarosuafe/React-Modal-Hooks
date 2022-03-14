import React from 'react' 
import './components.css';
import CloseButton from './CloseButton';
import CloseParagraph from './CloseParagraph';

/**
 * This is a component that return a modal interface
 */

function Modal({setModalOpen}){
    const modalBody = `Lorem ipsum dolor sit amet,consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Felis imperdiet proin fermentum leo vel orci porta non pulvinar.`;
    const modalTitle = `Esto es un modal`;

    return (
    <article className="modalBackground">
        <div className="modalContainer">
            <div className="titleCloseBtn">
                <div className="closeButton" onClick={() => setModalOpen(false)}>
                    <CloseButton />
                </div>
            </div>
            <div className="title">
                <h1>{modalTitle}</h1>
            </div>
            <div className="body">
                <p>{modalBody}</p>
                <div className='closeParagraph' onClick={() => setModalOpen(false)}>
                    <CloseParagraph/>
                </div> 
            </div>                 
        </div>
    </article>
    );
}

export default Modal;