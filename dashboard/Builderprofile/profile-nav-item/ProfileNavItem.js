import React from 'react';
import { Nav } from 'react-bootstrap';
import { RiArrowRightSLine } from 'react-icons/ri';

const ProfileNavItem = ({ title, active, index, onClick }) => {
  return (
    <Nav.Item>
      <Nav.Link
        active={active}
        onClick={onClick}
        className="d-flex justify-content-between align-items-center gap-2"
      >
        <div className="d-flex align-items-center gap-2">
          <div className="profile__sidebar__wrapper__icon shadow bg-white d-flex justify-content-center align-items-center">
            <img
              src={`/assets/profile-page/profile-icon-${index + 1}.svg`}
              alt="profile icon"
              className="img-fluid"
            />
          </div>

          {title}
        </div>

        <RiArrowRightSLine size={22} />
      </Nav.Link>
    </Nav.Item>
  );
};

export default ProfileNavItem;
