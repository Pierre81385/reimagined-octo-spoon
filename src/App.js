import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

//Create basic page layout here:  {nav links}, {cards in grid layout}, {footer links}

function App() {
  const style = {
    header: {
      textAlign: "center",
    },
    link: {
      padding: "15px",
    },
  };

  return (
    <Router>
      <Container fluid>
        <Row>
          <Col sm={4} style={style.header}>
            <h1>Peter Bishop</h1>
          </Col>
          <Col sm={8} style={style.header}>
            <Link to="/home" style={style.link}>
              HOME
            </Link>
            <Link to="/about" style={style.link}>
              ABOUT
            </Link>
            <Link to="/work" style={style.link}>
              WORK
            </Link>
            <Link to="/contact" style={style.link}>
              CONTACT
            </Link>
          </Col>
        </Row>
      </Container>

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
