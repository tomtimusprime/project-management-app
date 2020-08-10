import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "../Modal/Modal.js";
import { API } from "../../utils/API";

const SingleProject = (props) => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get('/api/user');
      setData(data)
    }

    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      {console.log()}
      <Container></Container>
    </>
  );
};

export default SingleProject;