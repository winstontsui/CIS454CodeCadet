import React, { useState } from 'react';

const EmailSupport = () => {
  const [showSupport, setShowSupport] = useState(false);

  const handleSupportClick = () => {
    setShowSupport(!showSupport);
  };

  const supportContainerStyle = {
    marginTop: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const supportButtonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const supportInfoStyle = {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#f2f2f2',
    borderRadius: '5px',
  };

  return (
    <div style={supportContainerStyle}>
      <button style={supportButtonStyle} onClick={handleSupportClick}>
        Contact Support
      </button>
      {showSupport && (
        <div style={supportInfoStyle}>
          <p>Contact us at: phil@syr.edu</p>
          <p>Our support team will get back to you shortly!</p>
        </div>
      )}
    </div>
  );
};

export default EmailSupport;
