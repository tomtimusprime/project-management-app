import React from "react";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import Card from "./components/Card/Card";
import styled from "styled-components";
import GuestImg from '../../../../assets/images/guest-avatar.jpg'
const ProfileImg = styled.img`
  height: 150px;
  width: 250px;
`;

const Profile = ({ user }) => {

  return (
    <>
      {console.log(user)}
      <Jumbotron>
        <h1>Welcome back!</h1>
        <p>You are at your profile page.</p>
        <p>Below is your dashboard.</p>
        <ProfileImg src={GuestImg} />
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;