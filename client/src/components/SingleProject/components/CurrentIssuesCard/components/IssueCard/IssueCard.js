import React, { useState } from "react";
import { Card, Button} from "react-bootstrap";
import { CustCard } from '../../../../utils/elements.js'
import IssueDetailModal from '../../../IssueDetails/IssueDetails'


const IssueCard = ({ issue, setProjectData, projectId,email }) => {
  const [show, setShow] = useState(false);
  const date = new Date(issue.Date).toLocaleDateString();
  console.log(email)
  return (
    <CustCard id={issue._id} style={{ height: 'fit-content' }} className='p-2'>
      <Card.Title>{issue.name}</Card.Title>
      <Card.Body style={{ position: 'relative' }} className='p-1'>
        <p><b>Date:</b> {date}</p> <p style={{ position: 'absolute', top: '0px', right: '.25em' }}><b>{issue.issueName}</b></p>
        <p className='d-inline-block'><b>Priority:</b></p>
        <Button className='mx-1' disabled variant={issue.priority === 'High' ? 'danger' : issue.priority === 'Medium' ? 'warning' : 'primary'}>{issue.priority}</Button>
        <Button onClick={() => { setShow(true) }} className='float-right'>Details</Button>
        <IssueDetailModal email={email} projectId={projectId} setProjectData={setProjectData} issue={issue} show={show} handleClose={() => { setShow(false) }} />
      </Card.Body>
    </CustCard>
  );
};

export default IssueCard;
