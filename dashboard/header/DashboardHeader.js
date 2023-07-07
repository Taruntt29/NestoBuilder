import "./DashboardHeader.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import profile from "../../Images/Profile.png";
// import bgImage from "../../Images/bg-image.png";
import { Link } from "react-router-dom";
// import { BsFillBellFill } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";

// import notification from "../../Images/notification.png";

import property from "../../Images/property.png";
import Brokerage from "../../Images/brokrage.png";
import home from "../../Images/Home.png";
import NotificationDropdown from "../Builderprofile/notification/NotificationDropdown";

const DashboardHeader = () => {
  return (
    <>
      <Navbar expand="lg" className="nes__navbar">
        <Container>
          <Navbar.Brand href="/" className="d-flex justify-content-center">
            <img src="/assets/nesto-logo.png" alt="Logo" height="30" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              <Nav.Item
                as={Link}
                to="/builder/home-dashboard"
                className="mx-3 d-flex align-items-center gap-2"
                style={{ textDecoration: "none" }}
              >
                <img src={home} alt="home" />
                Home
              </Nav.Item>
              <Nav.Link
                as={Link}
                to="/builder/home-dashboard/property"
                className="mx-3 d-flex align-items-center gap-2"
                style={{ color: "black" }}
              >
                <img src={property} alt="property" />
                Property
              </Nav.Link>
              <Nav.Item
                className="mx-3 d-flex align-items-center gap-2"
                as={Link}
                to="/builder/home-dashboard/Brokerage"
                style={{ textDecoration: "none", color: "#282431" }}
              >
                <img src={Brokerage} alt="Brokerage" />
                Brokerage
              </Nav.Item>
            </Nav>
            {/* <Nav className="mx-auto gap-2 "> */}
            {/* <Nav className="d-flex col-3 ms-auto align-items-center justify-content-end gap-2"> */}
            {/* <div className="d-flex col-3 ms-auto align-items-center justify-content-end"> */}
            {/* <Nav.Item> */}
            {/* <div className="nes__navbar__right__circle rounded-circle d-flex align-items-center justify-content-center"> */}
            {/* <GiWallet /> */}
            {/* </div> */}
            {/* </Nav.Item> */}
            {/* <Nav.Item className="nes__navbar__right__circle rounded-circle d-flex align-items-center justify-content-center"> */}
            {/* <div className="d-flex align-items-center position-relative"> */}
            {/* <div className="nes__navbar__right__circle rounded-circle d-flex align-items-center justify-content-center"> */}
            {/* <BsFillBellFill /> */}
            {/* <NotificationDropdown notification={3} /> */}
            {/* </div> */}
            {/* </div> */}
            {/* </Nav.Item> */}
            {/* </div> */}
            {/* </Nav> */}

            <div className="d-flex col-3 ms-auto align-items-center justify-content-end">
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
                {/* <NotificationDropdown notification={3} /> */}
              </Nav.Item>
              <Nav.Item
                className="me-3 mx-1 my-2"
                as={Link}
                to="/builder/home-dashboard/profile"
              >
                <img src={profile} alt="profile" className="br-profile" />
              </Nav.Item>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default DashboardHeader;
