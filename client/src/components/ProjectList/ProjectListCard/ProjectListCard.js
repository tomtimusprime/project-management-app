import React, { useEffect, useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import './ProjectListCard.css'
import { Link } from "react-router-dom";

const ProjectListCard = ({
    creator,
    name,
    description,
    status,
    id
}) => {
    let statusColor;
    if (status === "Upcoming") {
        statusColor = <Col className="pStatus pItem pUp" xl={3}>{status}</Col>;
    } else if (status === "In Progress") {
        statusColor = <Col className="pStatus pItem pProg" xl={3}>{status}</Col>;
    } else {
        statusColor = <Col className="pStatus pItem pComp" xl={3}>{status}</Col>;
    }

    const newTo = { 
        pathname: "/publicProject/"+creator+"/"+id
      }

    return (
        <>
            <Container>
                <Row>
                    <Col className="px-lg-0 py-lg-1" xl={1}></Col>
                    <Col className="px-lg-0 py-lg-1 pBox" xl={10}>
                        <Link
                            as="div"
                            to={newTo}
                        >
                            <h3 className="pName pItem">{name}</h3>
                        </Link>
                        <h6 className="pDescription pItem">{description}</h6>
                        <Row>
                            {statusColor}
                            <Col className="pCreator pItem" xl={6}>{"Contact: " + creator}</Col>
                        </Row>
                    </Col>
                    <Col className="px-lg-0 py-lg-1" xl={1}></Col>
                </Row>
            </Container>
        </>
    );
};

{/* <Col className="px-lg-0 py-lg-1" xl={3}>
<h6>{date}</h6>
</Col> */}

export default ProjectListCard;