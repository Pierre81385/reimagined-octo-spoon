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
  };
  return (
    <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
      <Container style={style.container} fluid>
        <Row xs={1} sm={2} md={3} className="g-4">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={beerMe} />
              <Card.Body>
                <Card.Title>BeerMe</Card.Title>
                <Card.Text>
                  BeerMe International is an app designed to provide you with a
                  random beer suggestion based of a clients input of alcohol
                  content and desired bitterness. This was inspired by the need
                  to find a new beer without having the benifit of suggestions
                  from social situations during times of social distancing and
                  fewer opportunities to eat out.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={budgetTracker} />
              <Card.Body>
                <Card.Title>Budget Tracker</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={employeeTracker} />
              <Card.Body>
                <Card.Title>Employee Tracker</Card.Title>
                <Card.Text>
                  Developers are often tasked with creating interfaces that make
                  it easy for non-developers to view and interact with
                  information stored in databases. Often these interfaces are
                  known as Content Management Systems. The challenge presented
                  was to architect and build a solution for managing a company's
                  employees using node, inquirer, and MySQL.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={fitnessTracker} />
              <Card.Body>
                <Card.Title>Fitness Tracker</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={weatherDashboard} />
              <Card.Body>
                <Card.Title>Weather Dashboard</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={favoriteRecipes} />
              <Card.Body>
                <Card.Title>Favorite Recipes</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
