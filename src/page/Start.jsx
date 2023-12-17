import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaHistory, FaBrain } from "react-icons/fa";
import {
  MdLeaderboard,
  MdOutlineScience,
  MdOutlineSportsCricket,
} from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CgUserlane } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";

import { TbHistoryToggle } from "react-icons/tb";
import { FcSportsMode } from "react-icons/fc";
import { GrTechnology } from "react-icons/gr";
import { RiMovie2Line } from "react-icons/ri";
import { BsMusicNoteList } from "react-icons/bs";

import "./style/start.css";

const Start = () => {
  return (
    <div>
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
        {/* <div className="popup">
        <div className="user-icon-id">
          <CgUserlane /> Username
          <div>user@gamil.com</div>
        </div>
        <div className="user-icon-signout">
          <TbLogout />
          Sign out
        </div>
      </div> */}
      </header>

      <div className="Categories">
        <button className="categ-btn">
          <div>
            <FaBrain />
          </div>
          General Knowledge:
        </button>
        <button className="categ-btn">
          <div>
            <MdOutlineScience />
          </div>
          Science
        </button>
        <button className="categ-btn">
          <div>
            <TbHistoryToggle />
          </div>
          History
        </button>
        <button className="categ-btn">
          <div>
            <FcSportsMode />
          </div>
          Sports
        </button>
        <button className="categ-btn">
          <div>
            <GrTechnology />
          </div>
          Technology
        </button>
        <button className="categ-btn">
          <div>
            <MdOutlineSportsCricket />
          </div>
          Cricket
        </button>
        <button className="categ-btn">
          <div>
            <RiMovie2Line />
          </div>
          Movies & Entertainment
        </button>
        <button className="categ-btn">
          <div>
            <BsMusicNoteList />
          </div>
          Music
        </button>
      </div>
    </div>
  );
};

export default Start;
