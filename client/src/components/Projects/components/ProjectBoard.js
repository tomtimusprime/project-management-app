import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import ProjectCard from "./ProjectCard/ProjectCard";
const CustCard = styled(Card)`
  height: 35rem;
`;

const CardHeader = styled.div`
  border-bottom: 1px solid var(--light-grey-sec);
`;

const ProjectBoard = ({ projects, setUserData, boardName }) => {
  return (
    <CustCard>
      <Card.Body className="w-100">
        <Row>
          <Col>
            <CardHeader className="p-sm-2">
              <h3 className="text-center">{boardName}</h3>
            </CardHeader>
          </Col>
        </Row>
        {projects.map((i, ind) => (
          <Row key={ind * -1}>
            <Col key={ind}>
              <ProjectCard key={i._id} setUserData={setUserData} id={i._id} name={i.projectName} createdAt={i.Date} issues={i.issues.length} inProgress={i.inProgress} completed={i.completed} />
            </Col>
          </Row>
        ))}
      </Card.Body>
    </CustCard>
  );
};
export default ProjectBoard;
