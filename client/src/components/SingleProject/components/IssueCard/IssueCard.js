import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import styled from 'styled-components';
import { CustCard } from '../../utils/elements.js'
const IssueCard = ({ issue }) => {

  const date = new Date(issue.Date).toLocaleDateString();

  return (
    <CustCard style={{ height: 'fit-content' }} className='p-2'>
      <Card.Title>{issue.name}</Card.Title>
      <Card.Body className='p-1'>
        <Row>
          <Col className='px-0' xs={6}><p><b>Date:</b> {date}</p>
            <p className='d-inline-block'><b>Priority:</b></p>
            <Button className='mx-1' disabled variant={issue.priority === 'High' ? 'danger' : issue.priority === 'Medium' ? 'warning' : 'primary'}>{issue.priority}</Button></Col>
          <Col className='px-0' xs='auto'><Button>Details</Button></Col>
        </Row>

      </Card.Body>
    </CustCard>
  );
};

export default IssueCard;
