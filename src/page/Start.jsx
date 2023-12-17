import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaHistory } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CgUserlane } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";

import "./style/start.css";

const Start = () => {
  return (
    <header className="start-Category">
      <Link to="/">
        <span className="quit-top">
          <FaHome />
          HOME
        </span>
      </Link>

      <Link to="/leaderboard">
        <span className="leaderboard-cat">
          <MdLeaderboard />
          LEADERBOARD
        </span>
      </Link>
      <Link to="/history">
        <span className="history-cat">
          <FaHistory />
          HISTORY
        </span>
      </Link>
      <span className="user-icon">
        <HiOutlineUserCircle />
      </span>
      <div className="popup">
        <div className="user-icon-id">
          <CgUserlane /> Username
          <div>user@gamil.com</div>
        </div>
        <div className="user-icon-signout">
          <TbLogout />
          Sign out
        </div>
      </div>
    </header>
  );
};

export default Start;
