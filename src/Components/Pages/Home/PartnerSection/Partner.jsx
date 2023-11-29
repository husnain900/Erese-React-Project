import React from "react";
import "./Partner.css";
import { Col, Container, Row } from "react-bootstrap";
import { PartnerArray } from "../../../DevData/Data";
const Partner = () => {
  return (
    <div className="Partner-div">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="title-tex">Why Partner with us?</h2>
            <p className="para patner-p">
              We see a huge opportunity with expanding business relations
              between Korea and the MENA region. Yet, at the same time, from
              marketing and exposure to the distance between the two areas,
              there are a lot of moving parts that need to be handled. We feel
              as your focused expert; we’re able to be the missing connection
              link between both worlds.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="flex-wrap-div">
        {PartnerArray.map((data, index) => {
          return (
            <div className="Partner-cards">
              <img
                src={`Assets/PartnerSectionImages/${data.image}`}
                alt={data.image}
              />
              <p className="para">{data.para}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partner;
