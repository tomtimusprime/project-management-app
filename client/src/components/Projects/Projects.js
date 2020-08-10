import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProjectBoard from "./components/ProjectBoard";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
// import AddIssueModal from "./components/AddIssueModal/AddIssueModal";
import AddProjectModal from "./components/AddProjectModal/AddProjectModal";
import axios from "axios";

const Projects = () => {
  const { isAuthenticated } = useAuth0();

  const [isModalOpen, setModalOpen] = useState(false);

  const [userData, setUserData] = useState(null);

  const [inProgressProjs, setInProgressProjs] = useState([]);
  const [completed, setCompletedProjs] = useState([]);
  const [upcoming, setUpcomingProjs] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchUserData = async () => {
        const res = await axios.get(`/api/user`);
        setUpcomingProjs(
          res.data[0].projects.filter(
            (i) => i.inProgress === false && i.completed === false
          )
        );
        setInProgressProjs(
          res.data[0].projects.filter(
            (i) => i.inProgress === true && i.completed === false
          )
        );
        setCompletedProjs(
          res.data[0].projects.filter((i) => i.completed === true)
        );
      };
      fetchUserData();
    }
  }, [userData]);

  const projectBoards = [
    {
      name: "Upcoming",
      projects: upcoming,
    },
    {
      name: "In Progress",
      projects: inProgressProjs,
    },
    {
      name: "Completed",
      projects: completed,
    },
  ];

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center py-3">Projects</h1>
            <Button
              disabled={!isAuthenticated}
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
          {projectBoards.map((i, ind) => (
            <Col key={ind} md={4}>
              <ProjectBoard
                key={i.name}
                setUserData={setUserData}
                projects={i.projects}
                boardName={i.name}
              />
            </Col>
          ))}
        </Row>
        <AddProjectModal
          setUserData={setUserData}
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
