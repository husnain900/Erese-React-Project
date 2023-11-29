import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as S from "./Navbar.styled";
import Form from "react-bootstrap/Form";
import { Link, NavLink } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

const ToggleImg = "Assets/togglebtn/menu.svg";

function BasicExample() {
  return (
    <S.Nav>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand to={"/"}>
            <Link to={"/"}>
              <img
                className="w-100"
                src="Assets/ERES%20Logo.png"
                alt=""
                srcset=""
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            className="border-0"
            as={Nav.Link}
            aria-controls="basic-navbar-nav"
            style={{ boxShadow: "none" }}
          >
            <img src={ToggleImg} alt="Toggle Button" />
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto my-4 my-lg-0 align-items-center">
              <NavLink to={"/"}>
                Home
                <img
                  className="un-line"
                  src="Assets/Page%20intigator.png"
                  alt=""
                  srcset=""
                />
              </NavLink>
              <NavLink to={"/product"}>
                Product
                <img
                  className="un-line"
                  src="Assets/Page%20intigator.png"
                  alt=""
                  srcset=""
                />
              </NavLink>
              <NavLink className="mt-0" to={"/contact"}>
                <S.ContactBtn>Contact</S.ContactBtn>
              </NavLink>
              <div className="d-flex align-items-center">
                <img src="Assets/en/Group%206094.svg" alt="" srcset="" />
                <Form.Select
                  className="ps-1 border-0 pr-mobile"
                  aria-label="Default select example"
                  style={{
                    color: "#786546",
                    paddingRight: "10px !important",
                    boxShadow: "none",
                  }}
                >
                  <option>En</option>
                  <option value="1">Kr</option>
                </Form.Select>
                <IoChevronDownOutline
                  style={{ color: "#786546" }}
                  className="d-block d-lg-none d-md-none fs-2"
                />
              </div>
              <button className="d-block d-lg-none d-md-none ft-btn">
                1:1 Consultation
              </button>
              <div className="icons d-flex justify-content-around w-100 d-block d-lg-none d-md-none">
                {[
                  AiFillInstagram,
                  AiOutlineTwitter,
                  FaFacebookSquare,
                  AiFillYoutube,
                ].map((Icon, index) => (
                  <div className="circle" key={index}>
                    <Icon />
                  </div>
                ))}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </S.Nav>
  );
}

export default BasicExample;
