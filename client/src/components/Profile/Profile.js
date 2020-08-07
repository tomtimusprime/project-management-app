import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import axios from "axios"
import Card from "../Card/Card";
import styled from "styled-components";
import GuestImg from '../../assets/images/guest-avatar.jpg'
import { useAuth0 } from "@auth0/auth0-react";
const ProfileImg = styled.img`
  height: 150px;
  width: 250px;
`;

const Profile = (props) => {

  const { user, isAuthenticated } = useAuth0();
  const params = { email: user.email };

  const loadUsers = () => {
    axios
    .get('/api/user')
    .then((res)=>{
      const savedUsers = res.data
      checkDuplicate(params,savedUsers)
    })
    .catch(err=>console.log(err))
  }

  const saveUser = (newUser) => {
    return axios.post('/api/user', newUser);
  }

  const checkDuplicate = (newUser,userList)=>{
    for(let i = 0; i < userList.length; i++){
      if(user.email===newUser.email){
        console.log("Welcome Back");
        return;
      }
    }
    saveUser(newUser);
  }

  useEffect(() => {
    if (isAuthenticated) {
      loadUsers();
    }
    else {
      console.log("incorrect login")
    }
  });


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