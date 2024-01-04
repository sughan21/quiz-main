import React from "react";
import { Link } from "react-router-dom";
import "./style/question.css";

const Question = () => {
  return (
    <div>
      <div className="test-topic">Quiz Test</div>
      <div className="ques">
        Question:1. Who is known as the "Father of Computer Science"?
      </div>
      <div className="qu-width"></div>
      <div className="answer-btn">
        <button className="ans-btn">Alan Turing </button>
        <button className="ans-btn">Charles Babbage</button>
        <button className="ans-btn">Ada Lovelace</button>
        <button className="ans-btn">John von Neumann</button>
      </div>
      <div className="prev-nxt-btn">
        <button className="prev-btn">Preview</button>
        <button className="nxt-btn">Next</button>
      </div>
    </div>
  );
};

export default Question;
