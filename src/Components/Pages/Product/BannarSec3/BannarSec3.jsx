import React from "react";
import { ProductBannar, BannarSec3 } from "../Bannar.style";
import { Col, Container, Row } from "react-bootstrap";
import { features5 } from "../../../DevData/Data";
import StoresBtn from "../../../UI-Components/StoresBtn";
import QrBarCode from "../../../UI-Components/QrBarCode/QrBarCode";
const Bannar = () => {
  return (
    <ProductBannar>
      <BannarSec3>
        <Container>
          <Row className="align-items-center">
            <Col
              lg={6}
              md={12}
              sm={12}
              className="order-2 order-lg-1 order-md-2"
            >
              <div>
                <h2>About the Diwan applications</h2>
                <p>
                  To help provide the appropriate exposure to the Korean
                  culture, the Diwan application helps to bridge the gap while
                  at the same time integrating with the KoCart application. This
                  helps to engage target demographics and work to convert this
                  engaged audience into customers that continuously purchase
                  items from our KoCart stores.
                </p>
                <div className="bannaricons">
                  <div>
                    {features5.map((feature, index) => (
                      <div key={index} className="d-flex align-items-center mb-3">
                          <img
                            src={feature.icon}
                            alt=""
                            srcSet=""
                            className="pe-2"
                          />
                        <p className="m-0">
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <StoresBtn />
                <QrBarCode />
              </div>
            </Col>
            <Col
              lg={6}
              md={12}
              sm={12}
              className="order-1 order-lg-2 order-md-1"
            >
              <div className="text-center img-center mb-4 mb-md-5 mb-lg-0">
                <img src="Assets/Group%206053.png" alt="" srcset="" />
              </div>
            </Col>
          </Row>
        </Container>
      </BannarSec3>
    </ProductBannar>
  );
};

export default Bannar;
