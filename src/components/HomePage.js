import "./HomePage.css";
const HomePage = () => {
  function handleChangeColor(e) {
    e.target.style.color = "red";

    console.log(e.target);
  }
  const handleBackColor = (e) => {
    e.target.style.color = "white";
  };
  const handleShowText = () => {
    let TextLeftSide = ["Hi I'm Dawid, let me indtroduce myself"];
    TextLeftSide.forEach((letter) => {
      <span>{letter} </span>;
    });
  };

  return (
    <div className="HomePage">
      <div className="LeftSide">
        {/* TODO */}
        <span className="HomePageText">
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            H
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            i{" "}
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            I
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            '
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            m{" "}
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            {" "}
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            D
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            a
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            w
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            i
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            d{" "}
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            ,{" "}
          </span>
          <br />
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            L
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            e
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            t{" "}
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            m
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            e{" "}
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            i
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            n
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            t
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            r
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            o
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            d
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            u
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            c
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            e{" "}
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            m
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            y
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            s
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            e
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            l
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            f
          </span>
          <span onMouseOver={handleChangeColor} onMouseLeave={handleBackColor}>
            !
          </span>
        </span>

        <button className="HomePageBtn">
          <p> Tell me about You </p>
          <i class="fas fa-arrow-down"></i>
        </button>
      </div>
      <div className="RightSide"></div>
    </div>
  );
};

export default HomePage;
