import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";
import UserCard from './components/UserCard/UserCard';
import ProfileCard from './components/ProjectsCard/ProjectsCard';
import StatsCard from './components/Stats/Stats'
const Home = () => {
    const { user, isAuthenticated } = useAuth0();
    const cardHeight = '250px'
    return (
        <Container>
            <Row className= 'py-5'>
                <Col className='d-flex justify-content-center' sm={6}><UserCard cardHeight={cardHeight} /></Col>
                <Col sm={6}><ProfileCard cardHeight={cardHeight} /></Col>
            </Row>
            <Row>
                <Col><StatsCard /></Col>
            </Row>
        </Container>

    );
};

export default Home;