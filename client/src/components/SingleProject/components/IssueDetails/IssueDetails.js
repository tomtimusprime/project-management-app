import React from "react";
import { Modal, Button } from "react-bootstrap";
import { API } from "../../../../utils/API";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const IssueDetails = ({
  show,
  handleClose,
  issue,
  setProjectData,
  projectId,
  email
}) => {
  const {
    issueName: name,
    Date: issueDate,
    description,
    _id: issueId,
  } = issue;
  const { user } = useAuth0();
  console.log(user.email)
  console.log(email)
  const date = new Date(issueDate).toLocaleDateString();

  const completeIssue = async () => {
    const { data } = await API.completeIssue(projectId, issueId);
    console.log(data);
    setProjectData(data);
    handleClose();
  };
  if(user.email===email){
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
  }else{
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
        </Modal>
      </div>
    );
  }
};

export default IssueDetails;
