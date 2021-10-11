import HomePage from "./components/HomePage";
import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
function App() {
  return (
    <div className="Wrapper">
      <div id="HomePage_Wrapper" className="HomePage_Wrapper">
        <HomePage />
        <Navbar />
      </div>
      <div id="About_Wrapper">
        <About />
      </div>
    </div>
  );
}

export default App;
