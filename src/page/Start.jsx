import React, { useState } from "react";
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
import YourComponent from "./category-popup";
import UserIcon from "./user-popup";
const Start = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const closeProfile = () => {
    setIsOpen(false);
  };
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
          {!isOpen ? (
            <HiOutlineUserCircle onClick={() => setIsOpen(true)} />
          ) : (
            ""
          )}
        </span>
      </header>
      <div className="Categories">
        <button className="categ-btn" onClick={handleButtonClick}>
          <div>
            <FaBrain />
          </div>
          General Knowledge:
        </button>
        <button className="categ-btn" onClick={handleButtonClick}>
          <div>
            <MdOutlineScience />
          </div>
          Science
        </button>
        <button className="categ-btn" onClick={handleButtonClick}>
          <div>
            <TbHistoryToggle />
          </div>
          History
        </button>
        <button className="categ-btn" onClick={handleButtonClick}>
          <div>
            <FcSportsMode />
          </div>
          Sports
        </button>
        <button className="categ-btn" onClick={handleButtonClick}>
          <div>
            <GrTechnology />
          </div>
          Technology
        </button>
        <button className="categ-btn" onClick={handleButtonClick}>
          <div>
            <MdOutlineSportsCricket />
          </div>
          Cricket
        </button>
        <button className="categ-btn" onClick={handleButtonClick}>
          <div>
            <RiMovie2Line />
          </div>
          Movies & Entertainment
        </button>
        <button className="categ-btn" onClick={handleButtonClick}>
          <div>
            <BsMusicNoteList />
          </div>
          Music
        </button>
      </div>
      <YourComponent
        isPopupOpen={isPopupOpen}
        handleClosePopup={handleClosePopup}
      />
      <UserIcon isOpen={isOpen} closeProfile={closeProfile} />
    </div>
  );
};

export default Start;
