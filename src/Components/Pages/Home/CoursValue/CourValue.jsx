import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./CourValue.css";
import { cardArray } from "../../../DevData/Data";
const CourValue = () => {
  return (
    <div className="Cour-div">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="title-tex">Our Core Values</h2>
            <p className="para">
              We help establish a logistically sound connection between Korea
              and <br /> the MENA region, focusing on a B2C business model.
            </p>
          </Col>
          <div className="flex-wrap-div">
            {cardArray.map((data, index) => (
              <div className="Cour-Carda-div card-margin">
                <img src={`Assets/CardImages/${data.image}`} alt={data.image} />
                <p className="para">{data.para}</p>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default CourValue;
