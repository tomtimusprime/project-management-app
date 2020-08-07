import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import ProfileCard from "./components/Card/ProfileCard";
import WorkCard from "./components/Card/WorkCard";
import HistoryCard from "./components/Card/HistoryCard";
import styled from "styled-components";
import GuestImg from '../../../../assets/images/guest-avatar.jpg'
const ProfileImg = styled.img`
  height: 100px;
  width: 125px;
`;

const CustomJumbotron = styled.div`
  background-color: var(--dark-grey-main);
  border-top-left-radius: 0;
  padding: 4rem 2rem;
  
  .header {
    color: white;
  }

`;

const Profile = ({ user }) => {

  return (
    <>
      {console.log(user)}
      <CustomJumbotron>
        <Row>
          <Col>
            <h1 className="header">Welcome back!</h1>
            <h1 className="header">User Name</h1>
          </Col>
          <Col>
            <ProfileCard name={"Tom"} title={"Software Engineer"} about={"Based in AZ"}/>
          </Col>
        </Row>
      </CustomJumbotron>
      <Container>
        <Row className="py-5">
          <Col>
            <WorkCard />
          </Col>
          <Col>
            <HistoryCard />
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