import React, {useState} from "react";
import { Modal, Button } from "react-bootstrap";
import Form from "./components/AddProjectForm";
const AddProjectModal = ({ show, handleClose }) => {
  const [projectForm, setProjectForm] = useState({
    projectName: '',
    priority: 'High',
    contributors: '',
    description: ''
  })

  const handleInputChange = e => {
    const {name, value} = e.target;
    setProjectForm({
      ...projectForm,
      [name]: value
    })
  };

  const handleSubmit = async () => {
    console.log(projectForm)
  }
  return (
    <div>
      <Modal onHide={handleClose} show={show}>
        <Modal.Header>
          <Modal.Title>Add Issue:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form values={projectForm} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
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
