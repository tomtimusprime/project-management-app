import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { CustCard } from "../../utils/elements.js";
import { NoIssues } from "./utils/elements";
import IssueCard from "./components/IssueCard/IssueCard";
import CardAnimation from "../CardAnimation/CardAnimation";
const CurrentIssuesCard = ({ data, projectId, setProjectData, openIssues, email }) => {
  console.log(email)
  return (
    <div>
      <CardAnimation delay={1}>
        <CustCard>
          <Card.Title>Current Issues:</Card.Title>
          <Card.Body className="">
            {data.issues && openIssues.length === 0 && (
              <div className="d-flex justify-content-center">
                <NoIssues>No open issues! Woo!</NoIssues>
              </div>
            )}
            {data.issues && (
              <>
                {openIssues.map((i) => (
                  <Row className="mb-3">
                    <Col className="w-100" xs={12}>
                      <IssueCard
                        key={projectId}
                        projectId={projectId}
                        setProjectData={setProjectData}
                        issue={i}
                        email={email}
                      />
                    </Col>
                  </Row>
                ))}
              </>
            )}
          </Card.Body>
        </CustCard>
      </CardAnimation>
    </div>
  );
};

export default CurrentIssuesCard;
