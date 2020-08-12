import React from "react";
import { Card } from "react-bootstrap";
import { CustCard } from "../../utils/elements.js";
import CardAnimation from "../CardAnimation/CardAnimation";

const DescriptionCard = ({ data }) => {
  return (
    <CardAnimation delay={0}>
      <CustCard
        style={{
          width: "100%",
          alignItems: "flex-starCustt",
          height: "auto",
        }}
      >
        <Card.Title>Description:</Card.Title>
        <Card.Body>
          <Card.Text>
            {data.description
              ? data.description
              : "You should leave meaningful descriptions for your projects!"}
          </Card.Text>
        </Card.Body>
      </CustCard>
    </CardAnimation>
  );
};

export default DescriptionCard;
