import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { API } from "../../../../utils/API";
import Form from "./components/AddIssueForm";
const AddIssueModal = ({ show, handleClose }) => {
  const [issueForm, setIssueForm] = useState({
    issueName: "",
    priority: "High",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIssueForm({
      ...issueForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(issueForm);
    
  };
  return (
    <div>
      <Modal onHide={handleClose} show={show}>
        <Modal.Header>
          <Modal.Title>Add Issue:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            values={issueForm}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddIssueModal;
