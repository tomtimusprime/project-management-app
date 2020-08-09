import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProjectBoard from "./components/ProjectBoard";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
import AddIssueModal from "./components/AddIssueModal/AddIssueModal";
import axios from "axios";

const Projects = () => {  
  const [isModalOpen, setModalOpen] = useState(false);
  const [userData, setUserData] = useState(null)
  const [inProgressProjs, setInProgressProjs] = useState([]);
  const [completed, setCompletedProjs] = useState([]);
  const [upcoming, setUpcomingProjs] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
        const res = await axios.get(`/api/user`);
        setUpcomingProjs(res.data[0].projects.filter(i => i.inProgress === false && i.completed === false))
        setInProgressProjs(res.data[0].projects.filter(i => i.inProgress === true && i.completed === false))
        setCompletedProjs(res.data[0].projects.filter(i => i.completed === true))
    };

    fetchUserData();
  }, [userData]);

  console.log(userData)
 

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
            <ProjectBoard setUserData={setUserData} projects={upcoming} />
          </Col>
          <Col lg={4}>
            <ProjectBoard setUserData={setUserData} projects={inProgressProjs} />
          </Col>
          <Col lg={4}>
            <ProjectBoard setUserData={setUserData} projects={completed} />
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
