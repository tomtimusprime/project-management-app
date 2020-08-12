import React from "react";
import { Modal, Button } from "react-bootstrap";
import { API } from "../../../../utils/API";

const IssueDetails = ({
  show,
  handleClose,
  issue,
  setProjectData,
  projectId,
}) => {
  const {
    issueName: name,
    Date: issueDate,
    description,
    _id: issueId,
  } = issue;
  const date = new Date(issueDate).toLocaleDateString();

  const completeIssue = async () => {
    const { data } = await API.completeIssue(projectId, issueId);
    console.log(data);
    setProjectData(data);
    handleClose();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="flex-column">
          <Modal.Title className="py-1">{name}</Modal.Title>
          <Modal.Title className="py-1">{date}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ wordBreak: "break-all" }}>
            <p>{description}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={completeIssue} variant="success">
            Complete
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default IssueDetails;
