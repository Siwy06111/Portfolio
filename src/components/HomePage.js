import "./HomePage.css";
import React from "react";
import WelcomeText from "./WelcomeText";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="LeftSide">
        {/* TODO */}
        <span className="HomePageText">
          <WelcomeText />
        </span>

        <button className="HomePageBtn">
          <p> Tell me about You </p>
          <i className="fas fa-arrow-down"></i>
        </button>
      </div>
      <div className="RightSide"></div>
    </div>
  );
};

export default HomePage;
