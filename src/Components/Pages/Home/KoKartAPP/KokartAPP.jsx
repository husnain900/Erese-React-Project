import React from "react";
import "./KokartAPP.css";
import { Col, Container, Row } from "react-bootstrap";
import StoresBtn from "../../../UI-Components/StoresBtn";
import QrBarCode from "../../../UI-Components/QrBarCode/QrBarCode";
const KokartAPP = () => {
  return (
    <div className="Kokart-container">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12} sm={12} className="order-2 order-lg-1 order-md-2">
            <h2 className="title-tex text-center text-lg-start text-md-center">Download KoCart App</h2>
            <p className="para ku-para text-center text-lg-start text-md-s">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected hum our, or random ised words which don’t look even
              slightly believable ere are many variations of passages.
            </p>
            <div>
              <StoresBtn />
            </div>
            <QrBarCode/>
          </Col>
          <Col lg={6} md={12} sm={12} className="order-1 order-lg-2 order-md-1">
            <div className="Kokart">
              <img
                src="Assets/KokartImages/Mobile.svg"
                alt="kokart"
                className="kokart-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default KokartAPP;
