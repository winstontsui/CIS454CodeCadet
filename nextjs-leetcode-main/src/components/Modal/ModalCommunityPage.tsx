import React from 'react';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    eventText: string;
  }
  
  const Modal: React.FC<ModalProps> = ({ show, onClose, eventText  }) => {
    if (!show) return null;
    const spacerStyle: React.CSSProperties = {
        marginRight: '8px', // Adjust the value to set the desired space
      };


    return (
      <div className="modal">
        <div className="modal-content">

        <span style={spacerStyle}></span>
          <span className="close" onClick={onClose}> </span>
          <p>{eventText}</p>
        </div>
      </div>
    );
  };
  
  export default Modal;