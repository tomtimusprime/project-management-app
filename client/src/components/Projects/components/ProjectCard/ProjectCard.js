import React from "react";
import "./ProjectCard.css";
import styled from "styled-components";
import { Button,Row, Col } from "react-bootstrap";


const MoveButton = styled(Button)`
  width: 5rem;
  height: 3rem;
  border-radius: 0;
  padding: .25rem;
`;

const HoverDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;

const ProjectCard = () => {
  return (
    <>
        <Row className='d-flex align-items-center py-2'>
          <Col className='px-lg-0 py-lg-1'  xl={3}><h6>Name</h6></Col>
          <Col  className='px-lg-0 py-lg-1' xl={3}><h6>Created at:</h6></Col>
          <Col className='px-lg-0 py-lg-1'  xl={3}><h6>Issues:</h6></Col>
          <Col className='px-lg-0 py-lg-1'  xl={3}>
        <MoveButton>Move</MoveButton>
          </Col>
        </Row>
    </>
  );
};

export default ProjectCard;
