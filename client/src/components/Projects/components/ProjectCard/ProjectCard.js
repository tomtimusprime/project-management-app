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
    <div>
      <Row className="d-flex align-items-center py-2">
        <Col className="px-lg-0 py-lg-1" xl={3}>
          <h6>{name}</h6>
        </Col>
        <Col className="px-lg-0 py-lg-1" xl={3}>
          <h6>{date}</h6>
        </Col>
        <Col className="px-lg-0 py-lg-1" xl={3}>
          <h6>{issues}</h6>
        </Col>
        <Col className="px-lg-0 py-lg-1" xl={3}>
          {completed && (
            <MoveButton variant='danger' data-id={id} onClick={handleMove}>
              Delete
            </MoveButton>
          )}
          {!completed && (
            <MoveButton data-id={id} onClick={handleMove}>
            Move
          </MoveButton>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ProjectCard;
