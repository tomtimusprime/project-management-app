import React from "react";
import { Card } from "react-bootstrap";
const IssueCard = ({ name, priority, desciption, status }) => {
  return (
    <Card className='w-100 h-100 p-4 my-3'>
      <Card.Title>{name}</Card.Title>
    </Card>
  );
};

export default IssueCard;
