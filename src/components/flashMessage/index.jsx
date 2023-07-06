import React, { useState, useEffect } from 'react';
import './index.css';

const FlashMessage = ({ message, onClose }) => {
  const [countdown, setCountdown] = useState(3); // Initial countdown value (in seconds)

  useEffect(() => {
    // Update countdown every second
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clear the timer when component unmounts or countdown reaches 0
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Automatically close the flash message when countdown reaches 0
    if (countdown === 0) {
      onClose();
    }
  }, [countdown, onClose]);

  return (
    <div className="flash-message">
      <div className="message-container">
        <p>{message}</p>
        <button className="close-button" onClick={onClose}><p>x</p></button>
      </div>
      <div className="loading-line" style={{ width: `${(countdown / 3) * 100}%` }} />
    </div>
  );
};

export default FlashMessage;
