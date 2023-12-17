import React from "react";
import { Link } from "react-router-dom";

const Question = () => {
  return (
    <div>
      <div className="test-topic">Quiz Test</div>
      <h1>1.Who is known as the "Father of Computer Science"?</h1>
      <div className="ans-btn">
        <button>Answer1</button>
        <button>Answer2</button>
        <button>Answer3</button>
        <button>Answer4</button>
      </div>
    </div>
  );
};

export default Question;
