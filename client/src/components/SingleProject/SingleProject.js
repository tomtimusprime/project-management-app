import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col, Container, Button } from "react-bootstrap";
import AddIssueModal from "./components/AddIssueModal/AddIssueModal";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import DescriptionCard from "./components/DescriptionCard/DescriptionCard";
import { StyledLink } from "../Layout/components/NavBar/NavBar";
import CurrentIssuesCard from "./components/CurrentIssuesCard/CurrentIssuesCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStepBackward,
  faExclamationTriangle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
const SingleProject = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
  const [openIssues, setOpenIssues] = useState([]);
  const [deleteModalShow, setDeleteModalShow] = useState(false);

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
        const { data } = await axios.get("/api/user");
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
              <Col className="d-flex justify-content-between align-items-center">
                <h1 style={{ wordBreak: "break-all" }} className="d-inline">
                  {data.projectName}
                </h1>
                <Button className="float-right d-inline">
                  <StyledLink to="/projects">
                    <FontAwesomeIcon
                      className="mr-1"
                      icon={faStepBackward}
                      size="1x"
                      color="white"
                    />
                    Go Back
                  </StyledLink>
                </Button>
              </Col>
            </Row>
            <Row className="py-2 pb-md-2">
              <Col xs={12}>
                <p className="d-inline"> Created on: {date}</p>
              </Col>
            </Row>
            <Row className="pb-1">
              <Col xs={"auto"}>
                <Button
                  onClick={handleShow}
                  data-id={data.id}
                  variant="warning"
                >
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    className="mr-1"
                    size="1x"
                    color="black"
                  />
                  Add Issue
                </Button>
              </Col>
              <Col xs={"auto"}>
                <Button
                  onClick={() => {
                    setDeleteModalShow(true);
                  }}
                  data-id={data.id}
                  variant="danger"
                >
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    className="mr-1"
                    size="1x"
                    color="white"
                  />
                  Delete Project
                </Button>
              </Col>
              <Col xs="auto">
                <Button
                disabled
                  variant={
                    data.priority === "High"
                      ? "danger"
                      : (data.priority = "Medium"
                          ? "warning"
                          : (data.priority = "Low" ? "primary" : "primary"))
                  }
                >
                  {data.priority === "High"
                    ? "High Priority"
                    : (data.priority = "Medium"
                        ? "Medium Priority"
                        : (data.priority = "Low"
                            ? "Low Priority"
                            : "High Priority"))}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <DeleteModal
          name={data.projectName}
          projectId={id}
          show={deleteModalShow}
          handleClose={() => {
            setDeleteModalShow(false);
          }}
        />
        <AddIssueModal
          setUserData={setProjectData}
          projectId={id}
          show={show}
          handleClose={handleClose}
        />
        <Row className="py-md-5">
          <Col md={6}>
            <Row className="py-3 py-md-3">
              <Col md={12}>
                <DescriptionCard data={data} />
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row className="py-3 py-md-3 pb-5 pb-md-0">
              <Col xs={12}>
                <CurrentIssuesCard
                  data={data}
                  projectId={id}
                  setProjectData={setProjectData}
                  openIssues={openIssues}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleProject;
