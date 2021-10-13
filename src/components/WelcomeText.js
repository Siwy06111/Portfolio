import React from "react";
import "./WelcomeText.css";
class WelcomeText extends React.Component {
  constructor() {
    super();
    this.state = {
      isHovered: false,
    };
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover(e) {
    this.setState((prevState) => ({
      isHovered: !prevState.isHovered,
    }));
    console.log(e.target);
  }
  render() {
    function handleChangeColor(e) {
      let rndNumber = Math.floor(Math.random() * 5);
      let colors = ["green", "blue", "yellow", "pink", "red"];
      e.target.style.color = `${colors[rndNumber]}`;
      e.target.style.fontSize = `13vh`;
      e.target.style.transition = `0.2s`;
    }
    const handleBackColor = (e) => {
      e.target.style.color = "white";
      e.target.style.fontSize = `10vh`;
    };
    let spanClassList = this.state.isHovered ? "hovered" : "";
    let text = [
      "H",
      "i",
      "! ",
      "I",
      "'",
      "m ",
      "D",
      "a",
      "w",
      "i",
      "d",
      ", ",
      "L",
      "e",
      "t ",
      "m",
      "e ",
      "i",
      "n",
      "t",
      "r",
      "o",
      "d",
      "u",
      "c",
      "e ",
      "m",
      "y",
      "s",
      "e",
      "l",
      "f",
      "!",
    ];
    let textt = text.map((character) => (
      <span
        className={spanClassList}
        onMouseOver={handleChangeColor}
        onMouseLeave={handleBackColor}
      >
        {character}
      </span>
    ));
    return <div className="HolderForTextofSpan">{textt}</div>;
  }
}

export default WelcomeText;
