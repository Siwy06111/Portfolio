import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="NavBar">
      <ul>
        <li data-tooltip="Home page">
          <Link
            to="HomePage_Wrapper"
            spy={true}
            smooth={true}
            duration={500}
          ></Link>
        </li>
        <li data-tooltip="About Me">
          <Link
            to="About_Wrapper"
            spy={true}
            smooth={true}
            duration={500}
          ></Link>
        </li>
        <li data-tooltip="Projects">
          <Link
            to="Projects_Wrapper"
            spy={true}
            smooth={true}
            duration={500}
          ></Link>
        </li>
        <li data-tooltip="Contact">
          <Link
            to="Contact_Wrapper"
            spy={true}
            smooth={true}
            duration={500}
          ></Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
