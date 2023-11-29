import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { PiTranslateBold } from "react-icons/pi";
import { eresLinks, productLinks } from "../../DevData/Data";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start" style={{ backgroundColor: "#252525" }}>
      <Container>
        <section className="Up-footer">
          <Row>
            <Col md={6} lg={4} className="mx-auto text-center text-lg-start text-md-center">
              <NavLink to={"/"}>
                <img src="Assets/Logo%20(2).png" alt="" srcSet="" />
              </NavLink>
              <div className="icons d-flex gap-3">
                {[AiFillInstagram, AiOutlineTwitter, FaFacebookSquare, AiFillYoutube].map((Icon, index) => (
                  <div className="circle" key={index}>
                    <Icon />
                  </div>
                ))}
              </div>
              <div className="d-none d-lg-block d-md-block">
                <div className="d-flex align-items-center select-div">
                  <PiTranslateBold style={{ fontSize: "18px", color: "#B0905B" }} />
                  <Form.Select aria-label="Default select example" style={{ boxShadow: "none" }}>
                    <option value="1">English</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <img src="Assets/Group%206089.svg" alt="" srcSet="" />
                </div>
              </div>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            {[eresLinks, productLinks].map((links, categoryIndex) => (
              <Col key={categoryIndex} sm={6} md={3} lg={2} className="mx-auto">
                <div>
                  <h4>{categoryIndex === 0 ? "ERES" : "Product"}</h4>
                  {links.map((link, index) => (
                    <p key={index} className="">
                      <NavLink className="" to={link.link}>
                        {link.title}
                      </NavLink>
                    </p>
                  ))}
                </div>
              </Col>
            ))}
            <hr className="w-100 clearfix d-md-none" />
            <Col md={12} lg={4} className="mt-md-5 mt-lg-0 mx-auto">
              <div className="abs-footer">
                <span className="text">The 1:1 chat & the calls are made from 9 AM to 6 PM on weekdays</span>
                <br />
                <button className="ft-btn">1:1 Consultation</button>
              </div>
            </Col>
          </Row>
        </section>
        <hr className="m-0 d-none d-lg-block d-md-block" style={{ borderTop: "1px solid #B0905B" }} />
        <section className="down-footer">
          <Row className="d-flex align-items-center">
            <Col md={12} lg={8} className="text-center text-md-start order-2 order-lg-1 order-md-1">
              <div className="up-p">
                <p>© Copyright Company 2023. All rights reserved.</p>
              </div>
            </Col>
            <Col md={12} lg={4} className="col-12 text-center order-1 order-lg-2 order-md-2 text-md-end d-flex justify-content-between p-3 p-lg-0 p-md-4">
              {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </Col>
          </Row>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
