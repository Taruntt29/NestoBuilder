import { Container, Tab, Tabs } from "react-bootstrap";
import SearchFilterBox from "../../search-filter/SearchFilter";
import Footer from "../../Footer/Footer";
// import Header from "../../../header/Header";
import AllVisits from "./AllVisits";
import PromotedVisits from "./PromotedVisits";
import DashboardHeader from "../../header/DashboardHeader";
const VisitDetails = () => {
  return (
    <>
      {/* <Header /> */}
      <DashboardHeader />
      <Container className="pt-5 pb-4 dashboard__wrapper">
        <SearchFilterBox />
        <h3 className="heading"> Visit Details</h3>

        <Tabs
          defaultActiveKey="visits"
          id="fill-tab-example"
          className="visit-details-tab mb-3 mx-auto w-50"
          fill
        >
          <Tab eventKey="visits" title="All Visits">
            <AllVisits />
          </Tab>

          <Tab eventKey="promoted" title="Promoted Visits">
            <PromotedVisits />
          </Tab>
        </Tabs>
      </Container>
      <Footer />
    </>
  );
};

export default VisitDetails;
