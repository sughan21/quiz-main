import React from "react";
import { Link } from "react-router-dom";

import "./style/leaderboard.css";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { TfiControlBackward } from "react-icons/tfi";

const LeaderBoard = () => {
  return (
    <div className="leaderboard">
      <Link to="/start">
        <button className="lead-back-btn">
          <TfiControlBackward className="le-ba-btn" /> Back
        </button>
      </Link>
      <h2 className="leader-topic">LEADERBOARD</h2>
      <div className="sub-top-leader">
        <span className="rank">RANK</span>
        <span className="name">NAME</span>
        <span className="score">SCORE</span>
      </div>
      <div className="list-person">
        <span>1</span>
        <span>Bala</span>
        <span>10</span>
      </div>
      <div className="list-person">
        <span>2</span>
        <span>Gowtham</span>
        <span>9</span>
      </div>
      <div className="list-person">
        <span>3</span>
        <span>Abishek</span>
        <span>9</span>
      </div>
      <div className="list-person">
        <span>4</span>
        <span>Hari</span>
        <span>7</span>
      </div>
      <div className="btn-pre-nxt">
        <button className="left-previous">
          <GrFormPreviousLink />
          Previous
        </button>
        <button className="right-nxt">
          Next <GrFormNextLink />
        </button>
      </div>
    </div>
  );
};

export default LeaderBoard;
