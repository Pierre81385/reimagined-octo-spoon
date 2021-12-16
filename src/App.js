import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Icon from "./assets/Peter J Bishop.png";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import myVideoBackground from "../src/assets/pexels-rostislav-uzunov-7385122.mp4";
import { classes } from "istanbul-lib-coverage";

//Create basic page layout here:  {nav links}, {cards in grid layout}, {footer links}

function App() {
  const style = {
    header: {
      textAlign: "center",
      color: "white",
      padding: "25px",
    },
    link: {
      fontFamily: "'Bebas Neue', cursive;",
      padding: "15px",
      color: "white",
    },
    img: {
      width: "75%",
    },
    video: {
      position: "fixed",
      zIndex: "-1",
      objectFit: "cover",
      width: "100vw",
      height: "100vh",
      top: "0",
      left: "0",
    },
    router: {
      zIndex: "2",
    },
  };

  return (
    <div>
      <Router style={style.router}>
        <Container fluid>
          <Row>
            <Col sm={4} style={style.header}>
              <h1>PETER J BISHOP</h1>
            </Col>
            <Col sm={8} style={style.header}>
              <Link
                variant="outline-dark"
                className="btn btn-lg m-2"
                to="/about"
                style={style.link}
              >
                ABOUT
              </Link>
              <Link
                variant="outline-dark"
                className="btn btn-lg m-2"
                to="/work"
                style={style.link}
              >
                WORK
              </Link>
              <Link
                variant="outline-dark"
                className="btn btn-lg m-2"
                to="/contact"
                style={style.link}
              >
                CONTACT
              </Link>
            </Col>
          </Row>
        </Container>

        <div id="mainContiner">
          <video
            autoPlay="autoplay"
            loop="loop"
            muted
            playsInline
            className={classes.Video}
            style={style.video}
          >
            <source src={`${myVideoBackground}`} type="video/mp4" />
          </video>
          <Route exact path="/">
            <Redirect to="/work"></Redirect>
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
    </div>
  );
}

export default App;
