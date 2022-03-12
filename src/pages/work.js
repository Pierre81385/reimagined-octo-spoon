import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import beerMe from "../assets/beerme.gif";
import employeeTracker from "../assets/employeeTracker.png";
import weatherDashboard from "../assets/weatherDashboard.png";
import favoriteRecipes from "../assets/favoriteRecipes.png";
import scalingLamp from "../assets/scalingLamp.gif";
import TheNightClub from "../assets/nightclub.gif";
import YardSale from "../assets/yardsale.gif";
import InstaClone from "../assets/instaClone.gif";

import "../pages/work.css";

export default function Work() {
  const style = {
    container: {
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%", // make sure the parent is full screen
      height: "100%", // so that the content will center correctly
      paddingTop: "25px",
      paddingBottom: "25px",
      backdropFilter: "blur(2px)",
      //backgroundColor: "rgba(0, 0, 0, 0.3)",
      //paddingLeft: "110px", //NEEDS MEDIA QUERY to set this only to set when viewport is small
    },
    img: {
      width: "1000px",
      hover: {
        transform: "scale(1.5)",
      },
    },
    card: {
      marginRight: "auto",
      marginLeft: "auto",
      boxShadow: "0 15px 25px rgba(129, 124, 124, 0.2)",
      borderRadius: "10px",
      backdropFilter: "blur(2px)",
      backgroundColor: "rgba(0, 0, 0, 0)",
      padding: "10px",
      textAlign: "center",
      width: "25rem",
      color: "white",
      borderColor: "rgba(255, 255, 255, .5)",
    },
    button: {
      marginLeft: "10px",
    },
  };

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
      <Container style={style.container} fluid>
        <Row xs={1} sm={1} md={1} lg={1} className="g-4">
          <Col>
            <Card style={style.card} data-aos="flip-up">
              <Card.Img variant="top" src={InstaClone} id="cardImg" />
              <Card.Body>
                <Card.Title>InstaClone</Card.Title>
                <Card.Text>
                  This repo was originially intended to test out different auth
                  API's, but the scope expanded into essentially an Instagram
                  clone. Auth services are handled by FirbaseAuth, and user
                  information is stored in a Firestore database. Images are
                  stored in a bucket through AWS S3, and are linked to posts in
                  an AWS DynamoDB database. DynamoDB stores tables for Posts,
                  Comments, Likes, and Replys with each document's creatAt
                  number serving as their unique identifier. Uploading is
                  handled by Mutler. Front end routing is done with React, while
                  backend routing is done through Express. Deployed site coming
                  soon!!!
                </Card.Text>
                <Card.Text>
                  This site is still under construction, please visit my Git
                  repo to see the progress!
                </Card.Text>
                <Card.Text>
                  REACT, AWS S3, AWS DynamoDB, Express, FirbaseAuth, Firebase
                  Firestore HTML, CSS, JAVASCRIPT, Bootstrap, and Mutler
                </Card.Text>
                <a
                  href="https://github.com/Pierre81385/authTester"
                  className="btn btn-outline-light"
                >
                  Git Repo
                </a>
                <a
                  href="#"
                  className="btn btn-outline-light"
                  style={style.button}
                >
                  EC2 Deploy
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={style.card} data-aos="flip-up">
              <Card.Img variant="top" src={YardSale} id="cardImg" />
              <Card.Body>
                <Card.Title>YARDSALE</Card.Title>
                <Card.Text>
                  YARDSALE is an app for posting items for sale at your
                  yardsale, and providing users with a map of its location.
                  Built on React for the front end and Apollo-Server-Express,
                  client side routing is done with React Router, whhile Apollo
                  GraphQL manages requests from MongoDB Atlas. Login
                  authorization is verified with JSON Web Token, which also
                  helps to provide users with conditional functionality. Address
                  information is input by the user on signup, and presented to
                  all users in an embeded Google Map.
                </Card.Text>
                <Card.Text>
                  REACT, MongoDB, JWT, GraphQL, ApolloServer-Express, HTML, CSS,
                  JAVASCRIPT, Bootstrap
                </Card.Text>
                <a
                  href="https://github.com/Pierre81385/legendary-train"
                  className="btn btn-outline-light"
                >
                  Git Repo
                </a>
                <a
                  href="https://pacific-fortress-83408.herokuapp.com/"
                  className="btn btn-outline-light"
                  style={style.button}
                >
                  Heroku Deploy
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={style.card} data-aos="flip-up">
              <Card.Img variant="top" src={TheNightClub} id="cardImg" />
              <Card.Body>
                <Card.Title>T[-]H NIGHTCLUB</Card.Title>
                <Card.Text>
                  This site is primarly a demonstrator and experiment in
                  creating a layout with sliding sections of moving content. The
                  result is a night club themed site with 4 sections that each
                  display a different video background with overlayed content. I
                  relied heavily on the creative use of CSS, Bootstrap, and
                  React states to solve a variety of creative challenges. Not
                  mobile friendly, but a visually appealing experiment on
                  desktop environments!
                </Card.Text>
                <Card.Text>REACT, HTML, CSS, , Javascript, Bootstrap</Card.Text>
                <a
                  href="https://github.com/Pierre81385/super-duper-octo-waffle"
                  className="btn btn-outline-light"
                >
                  Git Repo
                </a>
                <a
                  href="https://loving-panini-dbae11.netlify.app/"
                  className="btn btn-outline-light"
                  style={style.button}
                >
                  Netlify Deploy
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={style.card} data-aos="flip-up">
              <Card.Img variant="top" src={scalingLamp} />
              <Card.Body>
                <Card.Title>Scaling-Lamp</Card.Title>
                <Card.Text>
                  Scaling-Lamp is a demonstration of an ecommerce site built
                  with React.js, MongoDB, Apollo GraphQL, and JWT. Users can
                  create an account and login, with authenticaion via JWT
                  enabling logged-in users to access the entire site. Logged-in
                  users can go beyond viewing availible products, with the
                  ability to create, update, and delete products, as well as
                  adding products to a purchase cart.
                </Card.Text>
                <Card.Text>
                  REACT, MongoDB, JWT, GraphQL, ApolloServer-Express, HTML, CSS,
                  JAVASCRIPT, Bootstrap
                </Card.Text>
                <a
                  href="https://github.com/Pierre81385/scaling-lamp"
                  className="btn btn-outline-light"
                >
                  Git Repo
                </a>
                <a
                  href="https://hidden-inlet-42331.herokuapp.com/"
                  className="btn btn-outline-light"
                  style={style.button}
                >
                  Heroku Deploy
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={style.card} data-aos="flip-up">
              <Card.Img variant="top" src={beerMe} />
              <Card.Body>
                <Card.Title>BeerMe</Card.Title>
                <Card.Text>
                  BeerMe is an app designed to provide beer suggestions based on
                  user selected ABV and IBU preferences. This was a group
                  project, focusing primarily on the use of multiple API's to
                  provide data for beers and translations. I was primarily
                  responsible for designing the logic on the backend that
                  returns beers based on user input.
                </Card.Text>
                <Card.Text>
                  FunTranslations API, Punk API, JQUERY, HTML, CSS
                </Card.Text>
                <a
                  href="https://github.com/TJCourey/beerMe-international"
                  className="btn btn-outline-light"
                >
                  Git Repo
                </a>
                <a
                  href="https://tjcourey.github.io/beerMe-international/"
                  className="btn btn-outline-light"
                  style={style.button}
                >
                  GitPages Deploy
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={style.card} data-aos="flip-up">
              <Card.Img variant="top" src={employeeTracker} />
              <Card.Body>
                <Card.Title>Employee Tracker</Card.Title>
                <Card.Text>
                  Employee Tracker is a Content Management System CLI for
                  managing a company's employees.
                </Card.Text>
                <Card.Text>NODE.js, INQUIERER, MYSQL</Card.Text>
                <a
                  href="https://github.com/Pierre81385/employeeTracker"
                  className="btn btn-outline-light"
                >
                  Git Repo
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={style.card} data-aos="flip-up">
              <Card.Img variant="top" src={weatherDashboard} />
              <Card.Body>
                <Card.Title>Weather Dashboard</Card.Title>
                <Card.Text>
                  The Weather Dashboard is an app designed to allow users to
                  search for any city, and view information about the city's
                  current weather and 5 day forecast. Search results are saved
                  in local storage and displayed for easy retrieval. Weather
                  information is retrived via API.
                </Card.Text>
                <Card.Text>
                  HTML, CSS, JAVASCRIPT, Bootstrap, OpenWeather API
                </Card.Text>
                <a
                  href="https://github.com/Pierre81385/weatherDashboard-HW6"
                  className="btn btn-outline-light"
                >
                  Git Repo
                </a>
                <a
                  href="https://pierre81385.github.io/weatherDashboard-HW6/"
                  className="btn btn-outline-light"
                  style={style.button}
                >
                  GitPages Deploy
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={style.card} data-aos="flip-up">
              <Card.Img variant="top" src={favoriteRecipes} />
              <Card.Body>
                <Card.Title>Favorite Recipes</Card.Title>
                <Card.Text>
                  Favorite Recipes is a WordPress style blog, allowing a user to
                  create an account for posting recipes and commenting on others
                  with full CRUD functionality.
                </Card.Text>
                <Card.Text>
                  NODE.js, EXPRESS, RESTful API, Sequelize, MYSQL, MVC
                </Card.Text>
                <a
                  href="https://github.com/JaredWilliam97/Favorite-Recipes"
                  className="btn btn-outline-light"
                >
                  Git Repo
                </a>
                <a
                  href="https://murmuring-river-43433.herokuapp.com/"
                  className="btn btn-outline-light"
                  style={style.button}
                >
                  Heroku Deploy
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
