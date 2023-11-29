import React from "react";
import { ProductBannar, BannarSec4 } from "../Bannar.style";
import { Col, Container, Row } from "react-bootstrap";
import { features6, features7, contentItems } from "../../../DevData/Data";
import StoresBtn from "../../../UI-Components/StoresBtn";
const Bannar = () => {
  return (
    <ProductBannar>
      <BannarSec4>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} sm={12}>
              <div className="text-center img-center mb-4 mb-md-5 mb-lg-0">
                <img
                  src="Assets/ProductBannarSec4/Group%206054.png"
                  alt=""
                  srcset=""
                />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div>
                <h2 className="d-none d-lg-block">DIWAN Application</h2>
                <h2 className="d-block d-lg-none">
                  DIWAN application membership
                </h2>
                <p>
                  As you start to engage with the platform and make purchases
                  through KoCart, you can earn points with the DIWAN membership
                  program that is also interchangeable with the KoCart app.
                </p>
                <div>
                  {contentItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className="d-flex mb-3">
                        <img
                          className="pe-2"
                          src="Assets/Group%206045.svg"
                          alt=""
                          srcSet=""
                        />
                        <p className="m-0"> {item}</p>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                <div className="d-flex flex-wrap  bannaricons">
                  <div>
                    {features6.map((feature, index) => (
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
                    {features7.map((feature, index) => (
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
      </BannarSec4>
    </ProductBannar>
  );
};

export default Bannar;
