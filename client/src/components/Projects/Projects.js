import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ProjectBoard from './components/ProjectBoard'
const Projects = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <h1 className='text-center py-3'>Projects</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProjectBoard />
                    </Col>
                    <Col>
                        <ProjectBoard />
                    </Col>
                    <Col>
                        <ProjectBoard />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Projects
