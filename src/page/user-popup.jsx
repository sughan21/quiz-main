import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/user-popup.css";

import { HiOutlineUserCircle } from "react-icons/hi";
import { CgUserlane } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";

import { SlClose } from "react-icons/sl";

const UserIcon = ({ isOpen, closeProfile }) => {
  //   const [isPopupOpen, setPopupOpen] = useState(false);

  //   const handleIconClick = () => {
  //     setPopupOpen(!isPopupOpen);
  //   };

  //   const handleSignOut = () => {
  //     console.log("Signing out...");
  //     setPopupOpen(false);
  //   };

  return (
    <div>
      {isOpen && (
        <div className="us-popup">
          <span className="user-icon-clo">
            <SlClose onClick={closeProfile} />
          </span>
          <div className="popup-cl">
            <div className="user-icon-id">
              <CgUserlane /> Username
              <div>user@gamil.com</div>
            </div>
            <Link to="/">
              <button className="user-icon-signout">
                <TbLogout />
                Sign out
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserIcon;
