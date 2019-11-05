import React, { useRef } from 'react';

const Modal = ({ content, setIsOpen }) => {
  const modal = useRef(null);
  const modalOverlay = useRef(null);

  const onClick = e => {
    if (e.target !== modal.current && !modal.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="modal" ref={modalOverlay} onClick={onClick}>
      <div className="modal-content" ref={modal}>
        <span className="close-button" onClick={() => setIsOpen(false)}>
          ×
        </span>
        <div
          className="modal-inner"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default Modal;
