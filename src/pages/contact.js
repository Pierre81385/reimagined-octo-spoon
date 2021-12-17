import React from "react";
import gitImage from "../assets/GitHub_logo.png";
import facebookImage from "../assets/facebook.png";
import instagramImage from "../assets/instagram.png";
import linkedinImage from "../assets/linkedin.png";
import "../contact.css";

export default function Contact() {
  const style = {
    container: {
      textAlign: "center",
      color: "white",
      paddingTop: "25px",
      paddingBottom: "25px",
    },
    img: {
      height: "150px",
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
      <table style={style.table}>
        <tr>
          <td style={style.td}>
            <a href="https://github.com/Pierre81385">
              <img
                src={`${gitImage}`}
                alt="github"
                className="logo hover-shadow"
                id="gitLogo"
                style={style.img}
              />
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <a href="https://www.linkedin.com/in/peter-bishop-46a51597/">
              <img
                src={`${linkedinImage}`}
                alt="github"
                className="logo"
                id="gitLogo"
                style={style.img}
              />
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <a href="https://github.com/Pierre81385">
              <img
                src={`${instagramImage}`}
                alt="github"
                className="logo"
                id="gitLogo"
                style={style.img}
              />
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <a href="https://www.facebook.com/PeterJBishop">
              <img
                src={`${facebookImage}`}
                alt="github"
                className="logo"
                id="gitLogo"
                style={style.img}
              />
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
}
