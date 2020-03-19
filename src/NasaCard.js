import React from "react";
// import styled from "styled-components";

import {
  Card,
  CardBody,
  CardTitle,
  Container,
  CardText,
  CardImg,
  CardFooter
} from "reactstrap";

const NasaCard = props => {
  return (
    <Container fluid="sm">
      <Card>
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.date}</CardText>
        <CardBody>
          <CardImg top width="100%" src={props.img} alt="Card image cap" />
          <CardText>{props.explain}</CardText>
        </CardBody>
        <CardFooter>{props.copyright}</CardFooter>
      </Card>
    </Container>
  );
};

export default NasaCard;
