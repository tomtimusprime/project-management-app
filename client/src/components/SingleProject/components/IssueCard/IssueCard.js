import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import styled from 'styled-components';
import { CustCard } from '../../utils/elements.js'
const IssueCard = ({ issue }) => {

  const date = new Date(issue.Date).toLocaleDateString();

  return (
    <CustCard style={{ height: 'fit-content' }} className='p-2'>
      <Card.Title>{issue.name}</Card.Title>
      <Card.Body style={{ position: 'relative' }} className='p-1'>
        <p><b>Date:</b> {date}</p> <p style={{ position: 'absolute', top: '0px', right: '.25em' }}><b>{issue.issueName}</b></p>
        <p className='d-inline-block'><b>Priority:</b></p>
        <Button className='mx-1' disabled variant={issue.priority === 'High' ? 'danger' : issue.priority === 'Medium' ? 'warning' : 'primary'}>{issue.priority}</Button>
        <Button className='float-right'>Details</Button>

      </Card.Body>
    </CustCard>
  );
};

export default IssueCard;
