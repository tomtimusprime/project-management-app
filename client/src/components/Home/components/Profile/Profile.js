import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Row, Col } from "react-bootstrap";
import Card from "../../../Card/Card";
import styled from "styled-components";

const ProfileImg = styled.img`
  height: 150px;
  width: 250px;
`;

const Profile = ({ user }) => {
  let imgSrc = "../assets/profilepic-cropped.jpg";

  return (
    <>
      {console.log(user)}
      <Jumbotron>
        <h1>Welcome back!</h1>
        <p>You are at your profile page.</p>
        <p>Below is your dashboard.</p>
        <ProfileImg src={imgSrc} className="img" />
      </Jumbotron>
      <container fluid>
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
      </container>
    </>
  );
};

export default Profile;

// <td>{user.email}</td>
// <td>{user.name}</td>
// <td>{user.nickname}</td>
// <td><img src={user.picture} alt="avatar" /></td>

// <Container>
//             <Row>
//                 <Col>
//                     <Table striped bordered hover size="sm">
//                         <thead>
//                             <tr>
//                                 <th>Email</th>
//                                 <th>Name</th>
//                                 <th>Nickname</th>
//                                 <th>Picture</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>

//                             </tr>
//                         </tbody>
//                     </Table>
//                 </Col>
//             </Row>
//         </Container>
