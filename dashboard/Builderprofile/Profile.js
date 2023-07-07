import React, { useEffect, useState } from "react";
import { Container, Row, Col, Tab, Nav, Button, Image } from "react-bootstrap";
import { FiUser, FiClock, FiHelpCircle } from "react-icons/fi";
import { BiTransferAlt } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { CgNotes } from "react-icons/cg";
import "./Profile.css";
import { RiArrowRightSLine, RiPencilFill } from "react-icons/ri";
import { BsBoxArrowRight } from "react-icons/bs";
import PersonalDetailsForm from "./personal-details/PersonalDetailsForm";
import QueriesHistory from "./queries-history/QueriesHistory";
import TransactionHistory from "./profile-table/TransactionHistory";
import TermsConditions from "./terms-and-conditions/TermsConditions";
import RaiseQuery from "./raise-query/RaiseQuery";
import CardWrapper from "./card-wrapper/CardWrapper";
import Support from "./support/Support";
import DashboardHeader from "../header/DashboardHeader";
import Footer from "../Footer/Footer";
import PastProperty from "./Past Property/PastProperty";
import { MdSupportAgent } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { getBuilderDetail } from "../../redux/https-requests/builderDetail-http";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/authSlice";
import { setAuthToken } from "../../Api/api";
// import { useHistory } from "react-router-dom";

const tabs = [
  { title: "Personal Details", icon: <FiUser color="#000000" /> },

  { title: "Transaction", icon: <BiTransferAlt color="#000000" /> },
  { title: "Manage Roles", icon: <HiOutlineUserGroup color="#000000" /> },
  { title: "Past Properties", icon: <FiClock color="#000000" /> },
  { title: "Terms & Conditions", icon: <CgNotes color="#000000" /> },
  { title: "Support", icon: <MdSupportAgent color="#000000" /> },
  { title: "Raise Query", icon: <FiHelpCircle color="#000000" /> },
];

const profileSidebarNavContent = [
  {
    element: <PersonalDetailsForm />,
  },
  {
    element: <TransactionHistory />,
  },
  {
    element: <QueriesHistory />,
  },
  {
    element: <PastProperty />,
  },

  {
    element: <TermsConditions />,
  },
  {
    element: <Support />,
  },
  {
    element: <RaiseQuery />,
    title: "Your Recent Queries",
  },
];

const ProfilePage = () => {
  const builderId = useSelector((state) => state.auth.builderId);
  const [profilePictureUrl, setProfilePictureUrl] = useState(
    "/assets/profile-page/profile-mg-big.png"
  );

  // const history = useHistory();
  const [activeTab, setActiveTab] = useState(0);
  const dispatch = useDispatch();
  const builderData = useSelector(
    (state) => state.builderDetail.details[0]
  ) || { name: "" };
  useEffect(() => {
    dispatch(getBuilderDetail(builderId));
  }, [dispatch]);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(logout());
    setAuthToken();
    navigate("/builder/login");
    // console.log("Click");
  };
  function handleImageUpload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setProfilePictureUrl(event.target.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <>
      <DashboardHeader />
      <br />
      <Container fluid="lg" className="profile mb-5">
        <Row className="gy-5 gx-lg-5">
          <Col
            md={5}
            lg={3}
            className="profile-sidebar profile__sidebar__wrapper align-self-start"
          >
            <aside className="d-flex flex-column h-100 justify-content-between py-4">
              <div>
                {/* profile img */}
                <div className="text-center">
                  <div className="text-center position-relative profile__image mx-auto">
                    <Image
                      // src="/assets/profile-page/profile-mg-big.png"
                      src={builderData.profilePictureUrl}
                      roundedCircle
                      alt="profileImage"
                    />
                    <div className="profile__image__overlay">
                      <label htmlFor="imageUpload">
                        <RiPencilFill />
                      </label>
                      <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleImageUpload}
                      />
                    </div>
                  </div>
                  <h4 className="mt-3">{builderData.name}</h4>
                  <p className="text-muted mb-0">
                    Builder ID:{builderData._id}
                  </p>
                </div>
                {/* profile img code end here */}

                <Nav className="flex-column mt-4">
                  {tabs.map((tab, index) => (
                    <Nav.Item key={index}>
                      <Nav.Link
                        active={activeTab === index}
                        onClick={() => handleTabChange(index)}
                        className="d-flex justify-content-between align-items-center gap-2"
                      >
                        <div className="d-flex align-items-center gap-2">
                          <div className="profile__sidebar__wrapper__icon shadow bg-white d-flex justify-content-center align-items-center">
                            {tab.icon}
                          </div>

                          {tab.title}
                        </div>

                        <RiArrowRightSLine size={28} />
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>
              <div className="mt-4 d-grid">
                <Button
                  variant="transparent"
                  className="d-flex justify-content-center align-items-center gap-2 profile__sidebar__wrapper__signout"
                  onClick={handleSubmit}
                >
                  <BsBoxArrowRight className="icon" size={24} /> Sign Out
                </Button>
              </div>
            </aside>
          </Col>
          <Col md={7} lg={9} className="pt-0 ">
            <Tab.Container activeKey={activeTab}>
              <Tab.Content>
                {tabs.map((_, index) => (
                  <Tab.Pane key={index} eventKey={index}>
                    <CardWrapper title={profileSidebarNavContent[index]?.title}>
                      {profileSidebarNavContent[index].element}
                    </CardWrapper>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ProfilePage;
