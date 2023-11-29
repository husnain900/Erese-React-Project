import React from "react";
import { ProductBannar, BannarSec2 } from "../Bannar.style";
import { Col, Container, Row } from "react-bootstrap";
import { features3, features4 } from "../../../DevData/Data";
import StoresBtn from "../../../UI-Components/StoresBtn";
const Bannar = () => {
  return (
    <ProductBannar>
      <BannarSec2>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} sm={12} >
              <div className="text-center img-center mb-3 mb-md-5 mb-lg-0">
                <img src="Assets/Group%206149.png" alt="" srcset="" />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div>
                <h2>KoCart seller Application</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected hum our, or random ised words which don’t
                  look even slightly believable ere are many variations of
                  passages.
                </p>
                <div className="d-flex flex-wrap gap-2 bannaricons">
                  <div>
                    {features3.map((feature, index) => (
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
                    {features4.map((feature, index) => (
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
          </Row>
        </Container>
      </BannarSec2>
    </ProductBannar>
  );
};

export default Bannar;
