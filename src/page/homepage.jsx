import { Link } from "react-router-dom";
import "../page/style/homepage.css";

const Home = () => {
  return (
    <div className="Homepage">
      <span className="wel">Welcome</span>
      <p>Let Start The Quiz</p>
      <div className="btn-ans">
        <Link to="/">
          <button className="btn1">NO</button>
        </Link>
        <Link to="/start">
          <button className="btn2">YES</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
