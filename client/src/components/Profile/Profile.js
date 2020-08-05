import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Image, Table, Container, Row, Col, Button } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";

const Profile = ({ user }) => {
    return (
        <>
            {console.log(user)}
                <Jumbotron>
                    <h1>Welcome back!</h1>
                    <p>
                        You are at your profile page.
                </p>
                    <p>
                        Below is your dashboard.
                </p>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Email</th>
                                        <th>Name</th>
                                        <th>Nickname</th>
                                        <th>Picture</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
        </>
    );
};

export default Profile;

    // <td>{user.email}</td>
    // <td>{user.name}</td>
    // <td>{user.nickname}</td>
    // <td><img src={user.picture} alt="avatar" /></td>

