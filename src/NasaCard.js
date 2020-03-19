import React from "react";

import {
  Card,
  CardBody,
  Container,
  CardText,
  CardImg,
  CardFooter,
  Badge
} from "reactstrap";

const NasaCard = props => {
  return (
    <Container fluid="sm" body inverse style={{ backgroundColor: "lightgrey" }}>
      <Card
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
      >
        <h1>
          <Badge color="light" pill>
            {props.title}
          </Badge>
        </h1>
        <h3>
          <Badge>
            <CardText>{props.date}</CardText>
          </Badge>
        </h3>

        <CardBody>
          <CardImg top width="100%" src={props.img} alt="Card image cap" />
          <CardText body inverse style={{ backgroundColor: "black" }}>
            {props.explain}
          </CardText>
        </CardBody>
        <CardFooter>{props.copyright}</CardFooter>
      </Card>
    </Container>
  );
};

export default NasaCard;
