import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectBoard from "./components/ProjectBoard";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import AddProjectModal from "./components/AddProjectModal/AddProjectModal";
import axios from "axios";
import Loading from "../Loading/Loading";
import { motion } from "framer-motion";

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
        try {
          const res = await axios.get(`/api/user`);
          setUpcomingProjs(
            res.data[0].projects.filter(
              (i) => i.inProgress === false && i.completed === false && i.removed === false
            )
          );
          setInProgressProjs(
            res.data[0].projects.filter(
              (i) => i.inProgress === true && i.completed === false && i.removed === false
            )
          );
          setCompletedProjs(
            res.data[0].projects.filter((i) => i.completed === true && i.removed === false)
          );
        } catch (error) {
          console.error(error);
        }
      };
      fetchUserData();
    }
  }, [userData, isAuthenticated]);

  const projectBoards = [
    {
      name: "Upcoming",
      projects: upcoming,
      bg: "rgba(81, 234, 255, 0.5)",
    },
    {
      name: "In Progress",
      projects: inProgressProjs,
      bg: "rgba(234, 255, 81, 0.7)",
    },
    {
      name: "Completed",
      projects: completed,
      bg: "rgba(81, 255, 101, 0.6)",
    },
  ];

  return (
    <div>
      <Container>
        <Row className="pt-5">
          <Col>
            <h1 style={{ color: "white" }} className="text-center py-3">
              Projects
            </h1>
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
        <Row className="pb-5">
          {projectBoards.map((i, ind) => (
            <Col key={ind} className='my-3 my-md-0 px-1' md={4}>
              <motion.div
                animate={{
                  opacity: 1,
                  y: 0,
                  
                }}
                transition={ {
                  type: "spring",
                  damping: 9,
                  duration: 0.3,
                  delay: ind * .2
                }}

                initial={
                  {
                    opacity: 0,
                    y: 100
                  }
                }
              >
                <ProjectBoard
                  bg={i.bg}
                  key={i.name}
                  setUserData={setUserData}
                  projects={i.projects}
                  boardName={i.name}
                />
              </motion.div>
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

export default withAuthenticationRequired(Projects, {
  onRedirecting: () => <Loading />,
  returnTo: "/projects",
});
