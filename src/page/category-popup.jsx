import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/category-popup.css";

const YourComponent = ({ isPopupOpen, handleClosePopup }) => {
  //   const [isPopupOpen, setPopupOpen] = useState(false);

  //   const handleButtonClick = () => {
  //     setPopupOpen(true);
  //   };

  //   const handleClosePopup = () => {
  //     setPopupOpen(false);
  //   };

  return (
    <div>
      {isPopupOpen && (
        <div className="sub-cate-popup">
          <div className="cate-popup">
            <div className="ques-tim">
              <span className="cat-pop">Question</span>
              <select name="Question" className="ques-no">
                <option value="5" defaultValue={true}>
                  5
                </option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </div>

            <div className="diff-opt">
              <span className="dif-name">Any Difficulty</span>

              <select name="difficulty" className="dif-sele">
                <option value="Easy" defaultValue={true}>
                  Easy
                </option>
                <option value="normal">Normal</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <button className="cat-pop-btn" onClick={handleClosePopup}>
              Close Popup{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
