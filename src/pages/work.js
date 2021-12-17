import React from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import beerMe from "../assets/beerme.gif";
import budgetTracker from "../assets/budgetTracker.png";
import employeeTracker from "../assets/employeeTracker.png";
import fitnessTracker from "../assets/fitnessTracker.png";
import weatherDashboard from "../assets/weatherDashboard.png";
import favoriteRecipes from "../assets/favoriteRecipes.png";

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
      paddingLeft: "110px", //NEEDS MEDIA QUERY to set this only to set when viewport is small
    },
    img: {
      width: "300px",
    },
    card: {
      marginRight: "auto",
      marginLeft: "auto",
      boxShadow: "0 15px 25px rgba(129, 124, 124, 0.2)",
      borderRadius: "5px",
      backdropFilter: "blur(7px)",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: "10px",
      textAlign: "center",
      width: "18rem",
      color: "white",
    },
  };
  return (
    <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
      <Container style={style.container} fluid>
        <Row xs={1} sm={2} md={3} className="g-4">
          <Col>
            <Card style={style.card}>
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
                <a
                  href="https://github.com/TJCourey/beerMe-international"
                  className="btn btn-outline-light"
                >
                  Git Repo
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={style.card}>
              <Card.Img variant="top" src={employeeTracker} />
              <Card.Body>
                <Card.Title>Employee Tracker</Card.Title>
                <Card.Text>
                  Employee Tracker is a Content Management System for managing a
                  company's employees using node, inquirer, and MySQL.
                </Card.Text>
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
            <Card style={style.card}>
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
                <a
                  href="https://github.com/Pierre81385/weatherDashboard-HW6"
                  className="btn btn-outline-light"
                >
                  Git Repo
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={style.card}>
              <Card.Img variant="top" src={favoriteRecipes} />
              <Card.Body>
                <Card.Title>Favorite Recipes</Card.Title>
                <Card.Text>
                  Favorite Recipes is a WordPress style blog, allowing a user to
                  create an account for posting recipes and commenting on others
                  with full CRUD functionality.
                </Card.Text>
                <a
                  href="https://github.com/JaredWilliam97/Favorite-Recipes"
                  className="btn btn-outline-light"
                >
                  Git Repo
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
