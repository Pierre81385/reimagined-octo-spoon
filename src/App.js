import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";
import Me from "./pages/me";

import phone from "../src/assets/phone.png";
import email from "../src/assets/email.png";
import Abstract1 from "../src/assets/Abstract1.jpeg";
//for video background option
import { classes } from "istanbul-lib-coverage";
import abstract from "../src/assets/abstract.mp4";

//icons

import jquery from "../src/assets/icons/194922_jquery_social media_icon.png";
import github from "../src/assets/icons/317712_code repository_github_repository_resource_icon.png";
import html5 from "../src/assets/icons/317755_badge_html_html5_achievement_award_icon.png";
import css from "../src/assets/icons/317756_badge_css_css3_achievement_award_icon.png";
import javascript from "../src/assets/icons/652581_code_command_develop_javascript_language_icon.png";
import mysql from "../src/assets/icons/1012821_code_development_logo_mysql_icon.png";
import mongodb from "../src/assets/icons/1012822_code_development_logo_mongodb_programming_icon.png";
import json from "../src/assets/icons/2993435_array_data_file_javascript_json_icon.png";
import node from "../src/assets/icons/4375017_js_logo_node_icon.png";
import swift from "../src/assets/icons/4375105_logo_swift_icon.png";
import react from "../src/assets/icons/7423887_react_react native_icon.png";
import boostrap from "../src/assets/icons/8546808_bootstrap_icon.png";
import aws from "../src/assets/aws.png";
import express from "../src/assets/icons/kisspng-mean-solution-stack-express-js-node-js-javascript-5b1647bd733da2.082026521528186813472.png";

function App() {
  const style = {
    header: {
      textAlign: "center",
      color: "white",
      marginTop: "25px",
    },
    header2: {
      textAlign: "center",
      color: "white",
      marginTop: "25px",
    },
    link: {
      fontFamily: "'Bebas Neue', cursive;",
      padding: "15px",
      color: "white",
      outlineColor: "none",
      backgroundColor: "Transparent",
      marginLeft: "15px",
      marginRight: "15px",
      marginTop: "10px",
      whiteSpace: "nowrap",
    },
    link2: {
      fontFamily: "'Bebas Neue', cursive;",
      color: "white",
      outlineColor: "none",
      backgroundColor: "Transparent",
      marginLeft: "20px",
      marginRight: "20px",
      marginTop: "25x",
      whiteSpace: "nowrap",
      marginBottom: "10px",
    },
    firstLink: {
      fontFamily: "'Bebas Neue', cursive;",
      padding: "15px",
      color: "white",
      outlineColor: "none",
      backgroundColor: "Transparent",
      marginTop: "10px",
      whiteSpace: "nowrap",
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
      backdropFilter: "blur(2px)",
    },
    h1: {
      whiteSpace: "nowrap",
      fontFamily: "'Caveat', cursive",
    },
    icons: {
      width: "15px",
      margin: "10px",
    },
    icons2: {
      margin: "25px",
      textAlign: "center",
      width: "48px",
    },
  };

  return (
    <div style={style.main}>
      <Router style={style.router}>
        <Container fluid style={{ zIndex: 1 }}>
          <Row>
            <Col sm={4} style={style.header}></Col>
            <Col sm={4} style={style.header2}>
              <h1 style={style.h1}>Peter John Bishop</h1>
              <Link to="/about" id="link" style={style.link}>
                ABOUT
              </Link>
              <Link to="/me" id="link" style={style.link}>
                ME
              </Link>
              <Link to="/work" id="link" style={style.link}>
                WORK
              </Link>
              <Link to="/contact" id="link" style={style.link}>
                CONNECT
              </Link>
            </Col>
            <Col sm={4} style={style.header2}></Col>
          </Row>

          <Row style={{ textAlign: "center", marginBottom: "25px" }}>
            <div>
              <img src={aws} alt="aws" style={style.icons2}></img>

              <img src={jquery} alt="jquery" style={style.icons2}></img>
              {/* <img src={github} alt="github" style={style.icons2}></img> */}
              <img src={mysql} alt="mysql" style={style.icons2}></img>
              <img src={html5} alt="html" style={style.icons2}></img>
              <img src={mongodb} alt="mongodb" style={style.icons2}></img>
              <img src={json} alt="json" style={style.icons2}></img>
              <img src={css} alt="css" style={style.icons2}></img>
              <img src={node} alt="nodejs" style={style.icons2}></img>
              <img src={javascript} alt="javascript" style={style.icons2}></img>
              {/* <img src={swift} alt="swift" style={style.icons2}></img> */}
              <img src={react} alt="react" style={style.icons2}></img>
              {/* <img src={boostrap} alt="bootstrap" style={style.icons2}></img> */}
              {/* <img src={express} alt="express" style={style.icons2}></img> */}
            </div>
          </Row>
          <Row>
            <div className="text-center" style={{ color: "white" }}>
              <div>
                <a href="mailto: pjb.den@gmail.com" style={style.link2}>
                  <img src={email} style={style.icons}></img>
                  pjb.den@gmail.com
                </a>
                Denver, CO
                <a href="tel:7202725223" style={style.link2}>
                  <img src={phone} style={style.icons}></img>
                  720-272-5223
                </a>
              </div>
            </div>
          </Row>
        </Container>

        <div style={style.pages}>
          <video
            autoPlay="autoplay"
            loop="loop"
            muted
            playsInline
            className={classes.Video}
            style={style.video}
          >
            <source src={`${abstract}`} type="video/mp4" />
          </video>
          <Route exact path="/">
            <Redirect to="/work"></Redirect>
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/me">
            <Me />
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
