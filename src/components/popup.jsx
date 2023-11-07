import React from "react";

const Popup = ({ closePopup }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={closePopup}>
          &times;
        </span>
        <p>Thank you for your submission!</p>
      </div>
    </div>
  );
};

export default Popup;
