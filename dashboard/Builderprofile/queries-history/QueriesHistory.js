import SearchFilterBox from "../../search-filter/SearchFilter";
import { Tab, Tabs } from "react-bootstrap";

import Property from "./Property";
import FinanceProperty from "./FinanceProperty";

const QueriesHistory = () => {
  return (
    <>
      <h3>Manage Roles</h3>
      <SearchFilterBox isRoleScreen />
      <Tabs
        defaultActiveKey="Property"
        id="fill-tab-example"
        className="mb-3 p-5 rounded flex-column flex-sm-row"
        fill
      >
        <Tab eventKey="Property" title="List of Property Manager">
          <Property />
        </Tab>

        <Tab eventKey="Finance" title="List of Finance Manager ">
          <FinanceProperty />
        </Tab>
      </Tabs>
    </>
  );
};

export default QueriesHistory;
