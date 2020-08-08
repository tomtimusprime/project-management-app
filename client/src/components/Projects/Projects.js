import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ProjectBoard from "./components/ProjectBoard";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
const Projects = () => {
  const { user, isAuthenticated } = useAuth0();

  const [data, setData] = useState();

  const fetchUserData = async () => {
    try {
      const data = await axios.get(`/api/user`);
      console.log(data)
      return data;
    } catch (error) {
      console.error(error, 'in fetchdata');
    }
  };

  useEffect(() => {
      const userData = fetchUserData();
      setData(userData)
  }, []);


  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center py-3">Projects</h1>
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
      </Container>
    </div>
  );
};

export default Projects;
