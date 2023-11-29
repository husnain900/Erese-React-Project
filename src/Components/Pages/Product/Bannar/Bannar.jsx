import React from "react";
import { ProductBannar } from "../Bannar.style";
import { Col, Container, Row } from "react-bootstrap";
import { features, features2 } from "../../../DevData/Data";
import StoresBtn from "../../../UI-Components/StoresBtn";
const Bannar = () => {
  return (
    <ProductBannar>
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12} className="order-2 order-lg-1 order-md-2">
            <div className="KoCart-content">
              <h2>KoCart App</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humor, or randomized words which don’t look even
                slightly believable. There are many variations of passages.
              </p>
              <div className="d-flex flex-wrap gap-2 bannaricons">
                <div>
                  {features.map((feature, index) => (
                    <div key={index}>
                      <p>
                        <img
                          src={feature.icon}
                          alt=""
                          srcSet=""
                          className="pe-2"
                        />
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div>
                  {features2.map((feature, index) => (
                    <div key={index}>
                      <p>
                        <img
                          src={feature.icon}
                          alt=""
                          srcSet=""
                          className="pe-2"
                        />
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <StoresBtn />
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="order-1 order-lg-2 order-md-1">
            <div className="">
              <div className="circle-radius d-flex justify-content-center align-items-end">
                <img src="Assets/Mask%20group.png" alt="" srcset="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </ProductBannar>
  );
};

export default Bannar;
