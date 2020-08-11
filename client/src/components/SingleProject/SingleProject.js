import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import IssueCard from "./components/IssueCard/IssueCard";
import AddIssueModal from "./components/AddIssueModal/AddIssueModal";
import { CustCard } from './utils/elements.js';
import styled from 'styled-components'
const SingleProject = (props) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
  const [openIssues, setOpenIssues] = useState([])

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const setProjectData = (user) => {
    console.log(user);
    if (user[0].projects !== undefined) {
      const project = user[0].projects.filter((i) => i._id === id);
      setData(project[0]);
      const openIssues = project[0].issues.filter(i => i.completed === false);
      setOpenIssues(openIssues)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/user");
      setProjectData(data);
    };
    fetchData();
  }, []);

  const date = new Date(data.Date).toLocaleDateString();

  const NoIssues = styled.p`
    font-size: 1.25rem;
    position: absolute;
    top: 50%;
    text-align: center;
  `
  return (
    <>
      {console.log()}
      <Container>
        <Row className="pt-5 pb-3">
          <Col xs={12}>
            <Row className="pb-1">
              <Col>
                <h1>{data.projectName}</h1>
              </Col>
            </Row>
            <Row className="pb-1">
              <Col xs={12}>
                <p>Created on: {date}</p>
              </Col>
            </Row>
            <Row className="pb-1">
              <Col xs={"auto"}>
                <Button
                  onClick={handleShow}
                  data-id={data.id}
                  variant="warning"
                >
                  Add Issue
                </Button>
              </Col>
              <Col xs={"auto"}>
                <Button data-id={data.id} variant="danger">
                  Delete Project
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <AddIssueModal
          setUserData={setProjectData}
          projectId={id}
          show={show}
          handleClose={handleClose}
        />
        <Row className='py-5'>
          <Col md={6}><Row >
            <Col md={12}>
              <Card
                style={{
                  width: "100%",
                  textAlign: "initial",
                  height: "auto",
                }}
              >
                <Card.Body>
                  <Card.Title>Description:</Card.Title>
                  <Card.Text>
                    {data.description
                      ? data.description
                      : "You should leave meaningful descriptions for your projects!"}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={12}>
                <CustCard>
                  <Card.Title>Current Issues:</Card.Title>
                  <Card.Body className=''>
                    {data.issues && data.issues.length === 0 && (
                      <div className='d-flex justify-content-center'>
                        <NoIssues>You should add your first issue!</NoIssues>
                      </div>
                    )}
                    {data.issues && (
                      <>
                        {openIssues.map((i) => (
                          <Row className="mb-3">
                            <Col className='w-100' xs={12}>
                              <IssueCard projectId={id} setProjectData={setProjectData} issue={i} />
                            </Col>
                          </Row>
                        ))}
                      </>
                    )}
                  </Card.Body>
                </CustCard>
              </Col>
            </Row>

          </Col>
        </Row>

      </Container>
    </>
  );
};

export default SingleProject;

{/* <Row>
<Col md={12}>
  
    </Col>
    <Col md={6}>

      
    </Col>
  </Row>
</Col>

</Row> */}
