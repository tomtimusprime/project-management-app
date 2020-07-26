import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const ProfileCard = () => {
  const { user, isAuthenticated } = useAuth0();
  const ImageDiv = styled.div`
    background: url(${user.picture}) no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 100%
  `;
  const Header = styled(Card.Header)`
    display: inline-block;
    width: 100%
  `
  console.log(user);
  return (
    <Card className='mr-5' style={{ width: "18rem", overflowX: 'hidden', float: 'right' }}>
      <Row>
        <Col className="px-0" xs={4}>
          <ImageDiv />
        </Col>
        <Col className="px-0" xs={8}>
          <Header className="py-2 pl-2 pr-0">
            {" "}
            Hello, {user.name}!
          </Header>
          <Card.Title className="ml-2">Email:</Card.Title>
          <Card.Text className="ml-3">{user.email}</Card.Text>
        </Col>
      </Row>
    </Card>
  );
};

export default ProfileCard;
