import "./Header.css";
import { Container, Nav } from "react-bootstrap";
import profile from "../Images/Profile.png";

import { Link } from "react-router-dom";

import client from "../Images/client.png";
import Brokerage from "../Images/brokrage.png";
import home from "../Images/Home.png";

const Header = () => {
  return (
    <header className="login__header py-2">
      <Container>
        <Nav className="d-flex align-items-center">
          <Nav.Item>
            <img
              src="/assets/nesto-logo.png"
              alt="logo"
              className="login__header__img"
            />
          </Nav.Item>

          <div className="d-flex flex-row col-4 justify-content-between ms-auto ">
            <Nav.Item
              as={Link}
              to="/builder/home-dashboard"
              className="d-flex align-items-center gap-2"
              style={{ textDecoration: "none" }}
            >
              <img src={home} alt="home" />
              Home
            </Nav.Item>
            <Nav.Item className="d-flex align-items-center gap-2">
              <img src={client} alt="client" />
              Client
            </Nav.Item>
            <Nav.Item className="d-flex align-items-center gap-2">
              <img src={Brokerage} alt="Brokerage" />
              Brokerage
            </Nav.Item>
          </div>
          <div className="d-flex col-3 ms-auto align-items-center justify-content-end">
            <Nav.Item className="p-3">
              <img src="/assets/eye.png" alt="eye" className="eye" />
            </Nav.Item>
            <Nav.Item className="me-2 p-2">
              <img
                src="/assets/subscription.png"
                alt="subscription"
                className="subscription"
              />
            </Nav.Item>
            <Nav.Item className="me-2">
              <img
                src="/assets/notification.png"
                alt="notification"
                className="notification"
              />
            </Nav.Item>
            <Nav.Item
              className="me-3 mx-1 my-2"
              // as={Link}
              // to="/builder/home-dashboard/profile"
            >
              <img src={profile} alt="profile" className="br-profile" />
            </Nav.Item>
          </div>
        </Nav>
      </Container>
    </header>
  );
};

export default Header;
