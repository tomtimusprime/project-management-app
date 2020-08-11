import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import IssueCard from "./components/IssueCard/IssueCard";
import AddIssueModal from "./components/AddIssueModal/AddIssueModal";
import { CustCard } from './utils/elements.js';
const SingleProject = (props) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const setProjectData = (user) => {
    console.log(user);
    const project = user[0].projects.filter((i) => i._id === id);
    setData(project[0]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/user");
      setProjectData(data);
    };
    fetchData();
  }, []);
  console.log(data);
  const date = new Date(data.Date).toLocaleDateString();
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
        <Row>
          <Col xs={6}><Row className='py-3'>
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
          <Col xs={6}>
            <Row>
              <Col xs={12}>
                <CustCard>
                  <Card.Title>Current Issues:</Card.Title>
                  <Card.Body>
                    {data.issues && (
                      <>
                        {data.issues.map((i) => (
                          <Row className="mb-3">
                            <Col xs={12}>
                              <IssueCard issue={i} />
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
