import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProjectBoard from "./components/ProjectBoard";
import { API } from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
import AddIssueModal from "./components/AddIssueModal/AddIssueModal";
const Projects = () => {
  const { user, isAuthenticated } = useAuth0();
  const [isModalOpen, setModalOpen] = useState(false);

  const [data, setData] = useState();

  useEffect(() => {
    const userData = API.getUser();
    setData(userData);
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center py-3">Projects</h1>
            <Button
              onClick={() => {
                setModalOpen(true);
              }}
              className="float-right d-inline my-3"
            >
              Add Project
            </Button>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <ProjectBoard />
          </Col>
          <Col lg={4}>
            <ProjectBoard />
          </Col>
          <Col lg={4}>
            <ProjectBoard />
          </Col>
        </Row>
        <AddIssueModal
          show={isModalOpen}
          handleClose={() => {
            setModalOpen(false);
          }}
        />
      </Container>
    </div>
  );
};

export default Projects;
