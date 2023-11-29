import React from "react";
import "./QrBarCode.css";
const QrBarCode = () => {
  return (
    <div>
      <div className="QR-image-div">
        <img
          src="Assets/KokartImages/QR.svg"
          alt="qrcode"
          className="QR-code"
        />
        <p>Click & scan with your phone to download this app.</p>
      </div>
    </div>
  );
};

export default QrBarCode;
