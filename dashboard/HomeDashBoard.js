import { Col, Container, Row } from "react-bootstrap";
import ContentCard from "./dashboard-info-cards/DashboardInfoCards";
import DashboardHeader from "./header/DashboardHeader";
import { Link, Outlet, useLocation } from "react-router-dom";
import SearchFilterBox from "./search-filter/SearchFilter";
// import SearchFilterBox from "../../components/search-filter/SearchFilter";
import PropertyAnalytics from "./dashboard-property-analytics/PropertyAnalytics";
import SoldOut from "./dashboard-soldout-properties/SoldOut";
import homeImage from "../Images/summer.png";
import PropertyInvoice from "./dashboard-property-analytics/PendindInvoice";
import RecentPackage from "./dashboard-property-analytics/RecentPackage";
import RecentlyAdded from "./dashboard-soldout-properties/RecentlyAdded";
// import Header from "../header/Header";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";
import { getBuilderDetail } from "../redux/https-requests/builderDetail-http";
import { useDispatch, useSelector } from "react-redux";
import Charts from "./dashboard-property-analytics/dashboard-property-details/Charts";
import TotalRevenueChart from "../../admin-page/broker-profile/AdminDashboard/TotalRevenue/TotalRevenueChart/TotalRevenueChart";
// import { getAPI } from "../Api/ApiRequest";
// import { apiEndpoints } from "../Api/ApiEndpoint";

const dashboardInfoCardsData = [];

const HomeDashBoard = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const builderId = useSelector((state) => state.auth.builderId);
  const data = useSelector((state) => state.builderDetail.details);
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(data);
  useEffect(() => {
    debugger;
    dispatch(getBuilderDetail(builderId));
  }, [dispatch]);

  // const filteredData = data.filter((item) =>
  //   item.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  // const [data1, setData1] = useState([]);
  // useEffect(() => {
  //   const getBanner = async () => {
  //     const response = await getAPI(apiEndpoints.getAllBanner);
  //     setData1(response.data);
  //   };

  //   getBanner();
  // }, []);
  return (
    <>
      <DashboardHeader />
      {/* <Header /> */}

      <Container className="pt-2 pb-4 dashboard__wrapper">
        <Row className="gx-4 dashboard-cards align-items-center">
          <img src={homeImage} className="rounded my-3" alt="Home" />
          {dashboardInfoCardsData.map((cardItem, index) => (
            <Col md={6} lg={3} className="mb-4" key={index}>
              <ContentCard
                icon={cardItem.icon}
                title={cardItem.title}
                active={location.pathname === cardItem.path}
                path={cardItem.path}
              />
            </Col>
          ))}
        </Row>

        <SearchFilterBox
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <PropertyAnalytics />
        <SoldOut />

        <RecentlyAdded />

        <RecentPackage />
        <PropertyInvoice />
        <Charts />
      </Container>
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeDashBoard;
