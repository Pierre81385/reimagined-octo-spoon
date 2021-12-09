import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";
import { Link } from "react-router-dom";

//Create basic page layout here:  {nav links}, {cards in grid layout}, {footer links}

function App() {
  return (
    <Router>
      <div id="navContainer">
        <div id="logo">
          <h1>Peter J Bishop</h1>
        </div>
        <Link to="/home">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/work">WORK</Link>
        <Link to="/contact">CONTACT</Link>
      </div>

      <div id="mainContiner">
        <Route exact path="/">
          <Redirect to="/home"></Redirect>
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/work">
          <Work />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
