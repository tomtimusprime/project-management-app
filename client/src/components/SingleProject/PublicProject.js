import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col, Container, Button } from "react-bootstrap";
import AddIssueModal from "./components/AddIssueModal/AddIssueModal";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import DescriptionCard from "./components/DescriptionCard/DescriptionCard";
import CurrentIssuesCard from "./components/CurrentIssuesCard/CurrentIssuesCard";

const PublicProject = () => {
  const { id,email } = useParams();
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
  const [openIssues, setOpenIssues] = useState([]);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  console.log(email)


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
      const openIssues = project[0].issues.filter((i) => i.completed === false);
      setOpenIssues(openIssues);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
          console.log(email);
          console.log(id);
        const { data } = await axios.get("/api/public/project/"+email+"/"+id);
        console.log(data);
        setProjectData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  const date = new Date(data.Date).toLocaleDateString();

  return (
    <>
      <Container>
        <Row style={{ color: "white" }} className="pt-5 pb-3">
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
          </Col>
        </Row>
        <Row className="py-5">
          <Col md={6}>
            <Row>
              <Col md={12}>
                <DescriptionCard data={data} />
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={12}>
                <CurrentIssuesCard
                  data={data}
                  projectId={id}
                  setProjectData={setProjectData}
                  openIssues={openIssues}
                  email={email}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PublicProject;
