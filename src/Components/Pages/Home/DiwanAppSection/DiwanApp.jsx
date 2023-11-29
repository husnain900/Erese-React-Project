import React from "react";
import "./DiwanApp.css";
import { Col, Container, Row } from "react-bootstrap";
import StoresBtn from "../../../UI-Components/StoresBtn";
import QrBarCode from "../../../UI-Components/QrBarCode/QrBarCode";
const DiwanApp = () => {
  return (
    <div className="Diwan-Section">
      <Container>
        <Row>
          <Col lg={7} md={12} sm={12}>
            <div className="diwan-image-div">
              <img
                src="Assets/DiwanappImages/Diwan.svg"
                alt="diwan-app"
                className="kokart-image m-0"
              />{" "}
            </div>
          </Col>
          <Col lg={5} md={12} sm={12}>
            <h2 className="title-tex text-center text-lg-start">
              Download Diwan App
            </h2>
            <p className="para text-center text-lg-start">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected hum our, or random ised words which don’t look even
              slightly believable ere are many variations of passages.
            </p>
            <StoresBtn />
            <QrBarCode />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DiwanApp;
