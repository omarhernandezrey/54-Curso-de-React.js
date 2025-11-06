import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children, onClose }) {
  const portalRoot = document.getElementById('modal');
  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <div className="ModalBackground" onClick={onClose}>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
        <button className="ModalClose" onClick={onClose} aria-label="Cerrar">×</button>
        {children}
      </div>
    </div>,
    portalRoot
  );
}

export { Modal };