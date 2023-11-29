import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Contact.css";
import Phone from "../../Common/PhoneInput/Phone";
import { ContactArray } from "../../DevData/Data";

const Contact = () => {
  return (
    <div className="Contact-Section">
      <div className="Contact-heading-div">
        <Container>
          {" "}
          <h1>Contact</h1>
        </Container>
      </div>
      <Container>
        <Row>
          <Col lg={6} className="order-2 order-lg-1  order-md-1">
            <Col>
              <div className="kokart-entrance-section">
                <h1>KoCart Entrance Consulting Service</h1>
                <p className="mb-5 mb-lg-4 mb-md-4">
                  Hello This is ERES Korea. We welcome sellers who want to enter
                  the Middle Eastern market with a population of 450 million
                  people. Enter KoCart through a simple process.
                </p>
              </div>
            </Col>
            <Row>
              {ContactArray.map((data, index) => {
                return (
                  <Col lg={4} md={4}>
                    <div className="Service-div">
                      <div className="service-img-div mb-0 mb-lg-3 mb-md-3">
                        <img
                          src={`Assets/Contactimages/${data.img}`}
                          alt={data.img}
                        />
                      </div>
                      <h1>{data.heading}</h1>
                      <p>{data.para}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>
            <Col>
              <div className="chat-div">
                <div className="div">
                  <img src="Assets/Contactimages/chat.svg" alt="chat" />

                  <p>
                    The 1:1 chat & the calls are made from 9 AM to 6 PM on
                    weekdayss
                  </p>
                </div>
                <div className="button-div">
                  <button className="consul-btn">1:1 Consultation</button>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="img-box">
                <img
                  src="Assets/Contactimages/Map.svg"
                  alt="map"
                  className="my-4 map-image"
                />
              </div>
            </Col>
          </Col>
          <Col lg={6} md={12} className="order-1 order-lg-2 order-md-1">
            <div className="Form-div">
              <h1>Would you like to enter the Middle Eastern Market ?</h1>
              <p>
                Apply now to become a seller! After checking with ERES’s
                management, an account manager, will help you setup your store.
              </p>
              <Form>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>Business Registration Number</Form.Label>
                  <Form.Control type="number" placeholder="512 5845 2654 111" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label>Contact Name</Form.Label>
                  <Form.Control type="text" placeholder="Ibtisam" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label>Phone Number</Form.Label>
                  <Phone />
                </Form.Group>
                <Form.Group
                  className="mb-3 mb-lg-2 mb-md-2"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="exmaple@company.com"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-2 d-flex gap-2 align-items-center"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check
                    type="checkbox"
                    label="I agree to the third party consent form"
                    className="custom-checkbox "
                  />
                  <span className="under-text">View</span>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I agree to be contacted by phone, text messaging, and emails at the provided contact information in association with my registration"
                    id="custom-checkbox"
                  />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                  <span>
                    This consent does not include calls or texts made for
                    marketing purposes.
                  </span>
                </Form.Group>

                <div className="btn-div">
                  <Button>Contact us</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
