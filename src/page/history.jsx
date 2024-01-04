import React from "react";
import "./style/history.css";
import { Link } from "react-router-dom";
import { TfiControlBackward } from "react-icons/tfi";

const History = () => {
  return (
    <div className="history">
      <Link to="/start">
        <button className="his-back-btn">
          <TfiControlBackward className="hi-ba-btn" /> Back
        </button>
      </Link>
      <h1 className="his-top">HISTORY</h1>
      <div className="history-box">
        <div className="topic-his-1">
          <span className="per-his">Person-1</span>
          <span className="line-his"></span>
          <span>bala</span>
          <span>15/12/2023</span>
          <span>50%</span>
        </div>
        <div className="topic-his-2">
          <span className="per-his">Person-2</span>
          <span className="line-his"></span>
          <span>Gowtham</span>
          <span>15/12/2023</span>
          <span>70%</span>
        </div>
        <div className="topic-his-3">
          <span className="per-his">Person-3</span>
          <span className="line-his"></span>
          <span>Abishek</span>
          <span>15/12/2023</span>
          <span>50%</span>
        </div>
        <div className="topic-his-4">
          <span className="per-his">Person-4</span>
          <span className="line-his"></span>
          <span>Hari</span>
          <span>15/12/2023</span>
          <span>50%</span>
        </div>
        <div className="topic-his-5">
          <span className="per-his">Person-5</span>
          <span className="line-his"></span>
          <span>bala</span>
          <span>15/12/2023</span>
          <span>50%</span>
        </div>
        <div className="topic-his-6">
          <span className="per-his">Person-6</span>
          <span className="line-his"></span>
          <span>Gowtham</span>
          <span>15/12/2023</span>
          <span>70%</span>
        </div>
        <div className="topic-his-7">
          <span className="per-his">Person-7</span>
          <span className="line-his"></span>
          <span>Abishek</span>
          <span>15/12/2023</span>
          <span>50%</span>
        </div>
        <div className="topic-his-8">
          <span className="per-his">Person-8</span>
          <span className="line-his"></span>
          <span>Hari</span>
          <span>15/12/2023</span>
          <span>50%</span>
        </div>
      </div>
    </div>
  );
};

export default History;
