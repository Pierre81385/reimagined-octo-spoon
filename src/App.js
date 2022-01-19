import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import myVideoBackground from "../src/assets/blur.mp4";
import phone from "../src/assets/phone.png";
import email from "../src/assets/email.png";
import { classes } from "istanbul-lib-coverage";

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
      outlineColor: "none",
      backgroundColor: "Transparent",
      marginLeft: "10px",
      marginTop: "10px",
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
    h1: {
      fontFamily: "'Caveat', cursive",
    },
    icons: {
      width: "25px",
      margin: "15px",
    },
  };

  return (
    <div>
      <Router style={style.router}>
        <Container fluid>
          <Row>
            <Col sm={4} style={style.header}>
              <h1 style={style.h1}>- Peter J Bishop</h1>
            </Col>
            <Col sm={8} style={style.header}>
              <Link
                variant="outline-dark"
                className="btn btn-outline-light"
                to="/about"
                style={style.link}
              >
                ABOUT
              </Link>
              <Link
                variant="outline-dark"
                className="btn btn-outline-light"
                to="/work"
                style={style.link}
              >
                WORK
              </Link>
              <Link
                variant="outline-dark"
                className="btn btn-outline-light"
                to="/contact"
                style={style.link}
              >
                CONNECT
              </Link>
              <div>
                <a href="mailto: pjb.den@gmail.com">
                  <img src={email} style={style.icons}></img>
                </a>
                <a href="tel:7202725223">
                  <img src={phone} style={style.icons}></img>
                </a>
              </div>
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
