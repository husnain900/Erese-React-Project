import React, { useState } from "react";
import "./Popup.css";
import { Col, Container, Row } from "react-bootstrap";
import { RxCross1 } from "react-icons/rx";

const Popup = () => {
  const [isPopupVisible, setPopupVisible] = useState(true);

  const handlePopUp = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      {isPopupVisible && (
        <div className="Pop-Main">
          <Container>
            <Row>
              <div className="cross-icon">
                <RxCross1 onClick={handlePopUp} className="curser" />
              </div>
              <Col lg={4} md={4} sm={6}>
                <div className="right-div">
                  <img src="Assets/Contactimages/qrpop.svg" alt="qr" />
                  <p>scan with your phone to download this app.</p>
                </div>
              </Col>
              <Col sm={6} md={4}>
                <div className="Mobile-div">
                  <img src="Assets/Mask group.png" alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Popup;
