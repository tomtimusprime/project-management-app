import React from "react";
import "./ProjectCard.css";
import styled from "styled-components";
import { Button, Row, Col } from "react-bootstrap";
import { API } from "../../../../utils/API";

const MoveButton = styled(Button)`
  width: 5rem;
  height: 3rem;
  border-radius: 0;
  padding: 0.25rem;
`;

const ProjectCard = ({ name, createdAt, id, issues, inProgress, completed, setUserData }) => {
  const handleMove = async e => {
    const { id } = e.target.dataset;
    if (inProgress) {
      const data = await API.setProjectStatus(id, 'completed', true);
      setUserData(data.data[0])
    }
    if (!inProgress && !completed) {
      const data = await API.setProjectStatus(id, 'inProgress', true);
      setUserData(data.data[0])
    };
  };

  const handleDelete = async e => {

  }
  const date = new Date(createdAt).toLocaleDateString();
  return (
    <>
        <Row className='d-flex align-items-center py-2'>
          <Col className='px-lg-0 py-lg-1'  xl={3}><h6>Project Name:</h6></Col>
          <Col  className='px-lg-0 py-lg-1' xl={3}><h6>Created at:</h6></Col>
          <Col className='px-lg-0 py-lg-1'  xl={3}><h6>Issues:</h6></Col>
          <Col className='px-lg-0 py-lg-1'  xl={3}><h6>Contributors:</h6></Col>
          <Col className='px-lg-0 py-lg-1'  xl={3}>
        <MoveButton>Move</MoveButton>
          </Col>
        </Row>
    </>
  );
};

export default ProjectCard;
