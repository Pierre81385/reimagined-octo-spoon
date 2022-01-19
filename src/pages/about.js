import React from "react";
import profilePic from "../assets/profile.jpg";
import resume from "../assets/Peter Bishop - Resume CURRENTPDF.pdf"; //updated 12/16/2021
import downloadIcon from "../assets/downloadIcon.png";

export default function About() {
  const style = {
    container: {
      textAlign: "center",
      color: "white",
      paddingLeft: "25px",
      paddingRight: "25px",
      justifyContent: "center",
      alignItems: "center",
    },
    li: {
      textAlign: "left",
    },
    img: {
      borderRadius: "50%",
      marginBottom: "50px",
      marginLeft: "auto",
      marginRight: "auto",
      border: "2px solid #fff",
      textAlign: "center",
    },
    content: {
      padding: "25px",
      borderRadius: "5px",
      backdropFilter: "blur(7px)",
      background: "rgba(0, 0, 0, 0.5)",
    },
    resume: {
      color: "white",
      margin: "25px",
      fontFamily: "'Bebas Neue', cursive;",
    },
    icon: {
      width: "50px",
    },
    iconContainer: {
      marginBottom: "25px",
    },
  };
  return (
    <div style={style.container}>
      <img src={profilePic} style={style.img}></img>
      <div style={style.iconContainer}>
        <p>DOWNLOAD CV</p>
        <a href={resume}>
          <img src={downloadIcon} style={style.icon}></img>
        </a>
      </div>

      <div style={style.content}>
        <p>
          My name is Peter Bishop, and after years of working lower level roles
          in various tech startups while maintaining side jobs bartending at
          various establishments in downtown Denver, I've decided to take the
          next step by completing the Full Stack bootcamp at DU. This is an
          exciting opportunity for me, and I look forward to an exciting career
          learning new technologies, and problem solving to expand my knowledge.
          As previously stated, I have worked simultaneously in both the tech
          and the restaurant industries doing everything from corporate
          training, customer service, QA, fraud analysis, and work with building
          closed wireless networks while also working in bars and restaurants
          serving, bartending, and site tours and special events.
        </p>
        <h2>Work Experience</h2>
        <p>
          I developed strong customer service and client facing skills working
          as a team leader for an ordering and event registration provider.
          There I worked with clients to customize and coordinate their desired
          deployment package, and oversaw its on-site implementation. Typical
          technical aspects of this position included configuration of closed
          wireless networks running through venue access points, deploying and
          querying a MySQL database to track data and provide reporting, and
          documenting bugs and issues for the development team. I've also worked
          as a customer service rep for a software company specializing in
          employee onboarding, and a fintech company where I served as a fraud
          analyst in the loan department.
        </p>
        <p>
          In the restaurant industry, I've worked in security, as a high volume
          server, bar back, and bartender at many of the lodo area's busiest
          establishments. I most enjoyed working at a local distillery where I
          assisted in production of various spirits, conducting tours for guests
          interested in the process of distillation, and working nights as a
          full time bartender.
        </p>
        <h2>Accomplishments</h2>
        <ul>
          <li style={style.li}>
            DataConnect/Perenso: Executed 30+ events annually, personally
            leading implementation of over $655,000 worth of services in one
            year.
          </li>
          <li style={style.li}>
            Sushi-Rama: Promoted to GM after my first 2 months, I helped develop
            the companies financial tracking sheets, and assisted the company in
            transitioning their web presence to adapt to COVID-19 era services.
          </li>
          <li style={style.li}>
            Mile High Spirits Distillary: I held every position available in the
            company excluding top management positions. Regularly producing top
            sales, and contributing a variety of cocktails, infusions, and shot
            recipes that are still available today.
          </li>
        </ul>
      </div>
    </div>
  );
}
