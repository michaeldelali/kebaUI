import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="error-container">
      <div className="caption">
        <div className="hat-cont">
          <div className="lines"></div>
          <div className="hat"></div>
          <div className="left"></div>
          <div className="top"></div>
          <div className="left-opp"></div>
        </div>
      </div>
        <div className="head-text">Page Not Found !</div>
      <div className="head">
        <div className="pan-wrapper">
          <div className="center">
            <div className="sub-center">
              <div className="egg">
                <div className="yolk"></div>
              </div>
            </div>
          </div>
          <div className="handle"></div>
          <div className="handle-sub"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
