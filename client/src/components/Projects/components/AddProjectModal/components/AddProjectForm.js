import React from "react";
import { Form,Button } from "react-bootstrap";
const AddIssueForm = ({handleInputChange, handleSubmit, values}) => {
  return ( 
    <Form>
      <Form.Group controlId="name">
        <Form.Label>Project Name:</Form.Label>
        <Form.Control onChange={handleInputChange}
          name="projectName"
          type="text"
          placeholder="Project Title"
          value={values.projectName}
        />
      </Form.Group>
      <Form.Group controlId="priority">
        <Form.Label>Priority:</Form.Label>
        <Form.Control value={values.priority} onChange={handleInputChange} name="priority" as="select">
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="stage">
        <Form.Label>Stage:</Form.Label>
        <Form.Control value={values.stage} onChange={handleInputChange} name="stage" as="select">
          <option>New</option>
          <option>In Progress</option>
          <option>Completed</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="createdAt">
        <Form.Label>Created At:</Form.Label>
        <Form.Control value={values.createdAt} onChange={handleInputChange} name="createdAt" as="input">

        </Form.Control>
      </Form.Group>
      <Form.Group controlId="contributors">
        <Form.Label>Contributors:</Form.Label>
        <Form.Control value={values.contributors} onChange={handleInputChange} name="contributors" as="input">
      
        </Form.Control>
      </Form.Group>
    
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description:</Form.Label>
        <Form.Control value={values.description} onChange={handleInputChange} name="description" as="textarea" rows="3" />
      </Form.Group>
    <Button disabled={values.issueName === '' || values.description === ''} onClick={handleSubmit}>Submit</Button>
    </Form>
)
  };

export default AddIssueForm;

// <Form.Group controlId="issues">
// <Form.Label>Issues:</Form.Label>
// <Form.Control value={values.issues} onChange={handleInputChange} name="issues" as="input">

// </Form.Control>
// </Form.Group>
