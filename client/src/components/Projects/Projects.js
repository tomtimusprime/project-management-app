import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProjectBoard from "./components/ProjectBoard";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
// import AddIssueModal from "./components/AddIssueModal/AddIssueModal";
import AddProjectModal from "./components/AddProjectModal/AddProjectModal";
import axios from "axios";

const Projects = () => {
  const { user, isAuthenticated } = useAuth0();
  const [isModalOpen, setModalOpen] = useState(false);

  const [data, setData] = useState();

  const fetchUserData = async () => {
    try {
      const { data } = await axios.get(`/api/user`);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error, "in fetchdata");
    }
  };

  useEffect(() => {
    const userData = fetchUserData();
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
        <AddProjectModal
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
