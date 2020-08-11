import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import ProfileCard from "./components/Card/ProfileCard";
import WorkCard from "./components/Card/WorkCard";
import HistoryCard from "./components/Card/HistoryCard";
import styled from "styled-components";
import GuestImg from "../../../../assets/images/guest-avatar.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "../../../Modal/Modal.js";

const ProfileImg = styled.img`
  height: 100px;
  width: 125px;
`;

const CustomJumbotron = styled.div`
  background-color: var(--blue-main);
  border-top-left-radius: 0;
  padding: 4rem 2rem;

  .header {
    color: white;
  }
`;

const Profile = (props) => {
  const { user, isAuthenticated } = useAuth0();
  const [userData, setUserData] = useState({});
  let start = async () => {
    await axios.post("/cookie", user);
  };

  const getTotalIssues = user => {
    if (user.projects) {
      let total = 0;

      user.projects.forEach(project => {
        total += project.issues.length
      })

      return total;
    }
  }

  const getTotalCompletedIssues = user => {
    if (user.projects) {
      const completed = [];
      user.projects.forEach(proj => proj.issues.forEach(issue => { if (issue.completed === true) { completed.push(issue) } }))
      console.log(completed)
      return completed.length;
    }
  };

  const totalCompletedIssues = getTotalCompletedIssues(userData);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data } = await axios.get(`/api/user`);
      console.log(data)
      setUserData(data[0])
      getTotalIssues(data[0])
    };
    fetchUserData();
    if (isAuthenticated) {
      start();
    }
  }, []);

  const totalIssues = getTotalIssues(userData);

  return (
    <>
      <CustomJumbotron>
        <Container>
          <Row>
            <Col>
              <h1 className="header">Welcome back!</h1>
              <h1 className="header">{user.name}</h1>
            </Col>
            <Col>
              <ProfileCard
                name={user.name}
                email={user.email}
              />
            </Col>
          </Row>
        </Container>
      </CustomJumbotron>
      <Container>
        <Row className="py-5">
          <Col>
            <WorkCard projects={userData.projects ? userData.projects.length : ''} issues={totalIssues} />
          </Col>
          <Col>
            <HistoryCard issues={totalCompletedIssues} />
          </Col>
        </Row>
        <br></br>
      </Container>
    </>
  );
};

export default Profile;

// <Row>
//           <Col>
//             <Card />
//           </Col>
//           <Col>
//             <Card />
//           </Col>
//           <Col>
//             <Card />
//           </Col>
//         </Row>

// <Jumbotron style={{backgroundColor: "#3A3A3A", borderTopLeftRadius: 0}}></Jumbotron>
