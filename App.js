import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import HomeDashBoard from "./dashboard/HomeDashBoard";
import Property from "./dashboard/property/Property";
import SoldPage from "./dashboard/dashboard-soldout-properties/Sold-page";
import VisitDetails from "./dashboard/dashboard-property-analytics/Visit Details/VisitDetails";
import PropertyEdit from "./dashboard/dashboard-info-cards/Property Edit/PropertyEdit.js";
import PropertyClaim from "./dashboard/dashboard-property-analytics/Visit Details/Property claim/PropertyClaim";
import Brokerage from "./dashboard/Brokerage/Brokerage";
import BrokerageSettled from "./dashboard/Brokerage/BrokerageSettled";
import ProfilePage from "./dashboard/Builderprofile/Profile";
import NotificationDropdown from "./dashboard/Builderprofile/notification/NotificationDropdown";
import { Provider } from "react-redux";
import RegisterLogin from "./login/Register/RegisterLogin";
import RecentlyAddedProperty from "./dashboard/dashboard-soldout-properties/dashboard-tabs/RecentlyAddedProperty";
import RecentlySoldOutProperty from "./dashboard/dashboard-soldout-properties/dashboard-tabs/RecentlySoldOutProperty";
import Subscription from "./dashboard/dashboard-soldout-properties/Subscription/Subscription";
import store from "./redux/store";
import AllProperty from "./dashboard/dashboard-soldout-properties/dashboard-tabs/AllProperty";
// import { useSelector } from "react-redux";

const App = () => {
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* {!isLoggedIn && ( */}
          <Route exact path="/builder/login" element={<Login />} />
          {/* )} */}
          {/* {!isLoggedIn && ( */}
          <Route exact path="/builder/register" element={<RegisterLogin />} />
          {/* )} */}
          {/* {isLoggedIn && ( */}
          <Route
            exact
            path="/builder/home-dashboard/subscription"
            element={<Subscription />}
          />
          {/* )} */}
          {/* {isLoggedIn && ( */}
          <Route
            exact
            path="/builder/home-dashboard/recentlyadded"
            element={<RecentlyAddedProperty />}
          />
          {/* )} */}
          {/* {isLoggedIn && ( */}
          <Route
            exact
            path="/builder/home-dashboard/recentlysold"
            element={<RecentlySoldOutProperty />}
          />
          {/* )} */}
          {/* {isLoggedIn && ( */}
          <Route
            exact
            path="/builder/home-dashboard/visit"
            element={<VisitDetails />}
          />
          {/* )} */}
          {/* {isLoggedIn && ( */}
          <Route
            exact
            path="/builder/home-dashboard/promoted/claim/:propertyId"
            element={<PropertyClaim />}
          />
          {/* )} */}
          {/* {isLoggedIn && ( */}
          <Route
            exact
            path="/builder/home-dashboard/Brokerage/settled"
            element={<BrokerageSettled />}
          />
          {/* )} */}
          {/* {isLoggedIn && ( */}
          <Route
            exact
            path="/builder/home-dashboard/Brokerage"
            element={<Brokerage />}
          />
          {/* )} */}
          {/* {isLoggedIn && ( */}
          <Route
            exact
            path="/builder/home-dashboard/notification"
            element={<NotificationDropdown />}
          />
          {/* )} */}
          {/* {isLoggedIn && ( */}
          <Route
            exact
            path="/builder/home-dashboard/profile"
            element={<ProfilePage />}
          />
          {/* )} */}
          {/* {isLoggedIn && ( */}
          <Route
            exact
            path="/builder/home-dashboard/propertyedit/:propertyId"
            element={<PropertyEdit />}
          />
          {/* )} */}
          {/* {isLoggedIn && ( */}
          <Route
            exact
            path="/builder/home-dashboard/description/:propertyId"
            element={<SoldPage />}
          />
          {/* )} */}
          {/* {isLoggedIn && ( */}
          <Route
            exact
            path="/builder/home-dashboard/property"
            element={<AllProperty />}
          />
          {/* )} */}
          {/* {isLoggedIn && ( */}
          <Route
            exact
            path="/builder/home-dashboard"
            element={<HomeDashBoard />}
          >
            <Route exact path="property" element={<Property />} />
            <Route exact spath="HOME" />
            <Route exact bpath="Brokerage" />
          </Route>
          {/* )} */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
