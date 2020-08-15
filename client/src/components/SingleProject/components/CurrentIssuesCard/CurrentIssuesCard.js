import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { CustCard } from "../../utils/elements.js";
import { NoIssues } from "./utils/elements";
import IssueCard from "./components/IssueCard/IssueCard";
import CardAnimation from "../CardAnimation/CardAnimation";
const CurrentIssuesCard = ({ data, projectId, setProjectData, openIssues }) => {
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
                {openIssues.map((i, ind) => (
                  <Row key={ind} className="mb-3">
                    <Col key={ind * -1} className="w-100 p-0 p-md-2" xs={12}>
                      <IssueCard
                        projectId={projectId}
                        setProjectData={setProjectData}
                        issue={i}
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
