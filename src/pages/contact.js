import React from "react";
import gitImage from "../assets/GitHub_logo.png";
import facebookImage from "../assets/facebook.png";
import instagramImage from "../assets/instagram.png";
import linkedinImage from "../assets/linkedin.png";
import { Container, Row, Col } from "react-bootstrap";
import email from "../assets/email.png";
import phone from "../assets/phone.png";

export default function Contact() {
  const style = {
    container: {
      textAlign: "center",
      color: "white",
      paddingTop: "25px",
      paddingBottom: "25px",
      backdropFilter: "blur(2px)",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    img: {
      height: "150px",
      marginTop: "25px",
    },
    icons: {
      width: "50px",
    },
    table: {
      width: "100%",
      color: "white",
      paddingBottom: "25px",
    },
    td: {
      width: "175px",
    },
    footer: {
      paddingTop: "25px",
    },
  };
  return (
    <div style={style.container}>
      <Row>
        <div></div>
        <div></div>
      </Row>
      <Row>
        <Col>
          <div className="divForHover" style={{ textAlign: "right" }}>
            <a href="https://github.com/Pierre81385">
              <img
                src={`${gitImage}`}
                alt="github"
                className="logo hover-shadow"
                id="gitLogo"
                style={style.img}
              />
            </a>
          </div>
        </Col>
        <Col>
          <div className="divForHover" style={{ textAlign: "left" }}>
            <a href="https://www.linkedin.com/in/peter-bishop-46a51597/">
              <img
                src={`${linkedinImage}`}
                alt="linkedin"
                className="logo"
                id="linkedinLogo"
                style={style.img}
              />
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="divForHover" style={{ textAlign: "right" }}>
            <a href="https://www.instagram.com/pjb.den/">
              <img
                src={`${instagramImage}`}
                alt="instagram"
                className="logo"
                id="instagramLogo"
                style={style.img}
              />
            </a>
          </div>
        </Col>

        <Col>
          <div className="divForHover" style={{ textAlign: "left" }}>
            <a href="https://www.facebook.com/PeterJBishop">
              <img
                src={`${facebookImage}`}
                alt="facebook"
                className="logo"
                id="facebookLogo"
                style={style.img}
              />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}
