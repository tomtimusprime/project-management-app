import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import ProjectCard from "./ProjectCard/ProjectCard";
const CustCard = styled(Card)`
height: 35rem`;

const CardHeader = styled.div`
  border-bottom: 1px solid var(--light-grey-sec);
`;

const CardBody = styled.div``;
const ProjectBoard = () => {
  return (
    <CustCard>
      <Card.Body className='w-100'>
        <Row>
          <Col>
            <CardHeader className="p-sm-2">
              <h1 className="text-center">hi</h1>
            </CardHeader>
          </Col>
        </Row>
        <Row>
          <Col>
              <ProjectCard />
          </Col>
        </Row>
      </Card.Body>
    </CustCard>
  );
};
export default ProjectBoard;
