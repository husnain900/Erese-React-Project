import React from "react";
import "./Banner.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div className="home-bannar">
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12} className="block1">
            <h1 className="title-tex">ERES Story</h1>
            <p className="para">
              Established in 2018, ERES International Trade set off with the
              mission to connect the MENA region with Korea. In addition, we
              wanted to bring superior quality products to this region
              seamlessly through our eCommerce platform KoCart.
              <br /> <br className="d-none d-lg-block d-md-block" />
              We operate in 22 countries and our primary focus is on the main 6
              Gulf Cooperation Council (GCC) countries. At the same time, we
              help to source over 200 Korean brands to bring to this market.
            </p>
            <img
              src="Assets/Map.png"
              alt=""
              className="w-100 h-auto d-block d-lg-none"
            />
            <Row className="text-center">
              <Col>
                <h5>22</h5>
                <span>Operate countries</span>
              </Col>
              <Col className="border-LR">
                <div>
                  <h5>6</h5>
                  <span>
                    Primary focus (GCC) <br />
                    countries.
                  </span>
                </div>
              </Col>
              <Col>
                <h5>200+</h5>
                <span>Korean brands</span>
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={12}>
            <img
              src="Assets/Map.png"
              alt=""
              className="w-100 h-auto d-none d-lg-block"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
