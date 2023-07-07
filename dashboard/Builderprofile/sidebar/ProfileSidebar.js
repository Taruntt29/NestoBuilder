import { Image, Nav } from "react-bootstrap";
import { RiPencilFill } from "react-icons/ri";
import ProfileNavItem from "../profile-nav-item/ProfileNavItem";
import { Button } from "bootstrap";
import { BsBoxArrowRight } from "react-icons/bs";

const tabs = [
  { title: "Personal Details" },
  { title: "Queries History" },
  { title: "Transaction History" },
  { title: "Terms & Conditions" },
  { title: "Support" },
  { title: "Raise Query" },
];

const ProfileSidebar = () => {
  return (
    <aside className="d-flex flex-column h-100 justify-content-between py-4">
      <div>
        {/* profile img */}
        <div className="text-center">
          <div className="text-center position-relative profile__image mx-auto">
            <Image
              src="/assets/profile-page/profile-mg-big.png"
              roundedCircle
            />
            <div className="profile__image__overlay">
              <RiPencilFill />
            </div>
          </div>
          <h4 className="mt-3">Vinit Sharma</h4>
          <p className="text-muted">34562344432</p>
        </div>
        {/* profile img code end here */}

        <Nav className="flex-column mt-4">
          {tabs.map((tab, index) => (
            <ProfileNavItem key={index} title={tab.title} index={index} />
          ))}
        </Nav>
      </div>
      <div className="mt-4 d-grid">
        <Button className="d-flex justify-content-center align-items-center gap-2 profile__sidebar__wrapper__signout">
          <BsBoxArrowRight className="icon" size={18} /> Sign Out
        </Button>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
