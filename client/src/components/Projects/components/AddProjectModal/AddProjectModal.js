import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Form from "./components/AddProjectForm";
import { API } from "../../../../utils/API";
const AddProjectModal = ({ show, handleClose, setUserData }) => {

  const initialFormState = {
    projectName: "",
    priority: "High",
    description: "",
    private: true,
  }

  const [projectForm, setProjectForm] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectForm({
      ...projectForm,
      [name]: value,
    });
  };

  const handleCheck = (e) => {
    const { checked } = e.target;
    setProjectForm({
      ...projectForm,
      private: checked
    })
  }

  const handleSubmit = async () => {
    console.log(projectForm);
    const data = await API.addProject(projectForm);
    setUserData(data);
    setProjectForm(initialFormState);
    handleClose()
  };
  return (
    <div>
      <Modal onHide={handleClose} show={show}>
        <Modal.Header>
          <Modal.Title>Add Project:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            values={projectForm}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            handleCheck={handleCheck}
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

export default AddProjectModal;
