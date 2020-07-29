import React from "react";
import { Jumbotron, Table, Container, Row, Col } from "react-bootstrap";

const Profile = ({ user }) => {
    return (
        <>
            {console.log(user)}
            <Jumbotron>
                <h1>Hello, {user.nickname}!</h1>
                <p>
                    You have entered the realm.
                </p>
                <p>
                    Below table shows the user profile details that are
                    returned from Auth0.
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
                                    <td>{user.email}</td>
                                    <td>{user.name}</td>
                                    <td>{user.nickname}</td>
                                    <td><img src={user.picture} alt="avatar" /></td>
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