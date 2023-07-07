// import DashboardTabs from '../../dashboard-tabs/DashboardTabs';
import { Tab, Tabs } from "react-bootstrap";
// import AccordionCard from "../accordion/AccordionCard";
// import DashboardTabs from "../dashboard-tabs/DashboardTabs";
// import { GrDocumentPdf } from "react-icons/gr";
import SupportMenu from "./SupportMenu";
import Faq from "./Faq";

// const tabKey = ["Support", "FAQ"];
const Support = () => {
  return (
    <>
      {/* <DashboardTabs tabsKey={tabKey} activeState={tabKey[0]} /> */}
      <Tabs
        defaultActiveKey="Support"
        id="fill-tab-example"
        className="mb-3 p-5 rounded flex-column flex-sm-row"
        fill
      >
        <Tab eventKey="Support" title="Support">
          <SupportMenu />
        </Tab>

        <Tab eventKey="FAQ" title="FAQ ">
          <Faq />
        </Tab>
      </Tabs>
    </>
  );
};

export default Support;
