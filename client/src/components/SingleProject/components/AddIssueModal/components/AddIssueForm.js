import React from "react";
import { Form,Button } from "react-bootstrap";
const AddIssueForm = ({handleInputChange, handleSubmit, values}) => {
  return ( 
    <Form>
      <Form.Group controlId="name">
        <Form.Label>Issue Name:</Form.Label>
        <Form.Control onChange={handleInputChange}
          name="issueName"
          type="text"
          placeholder="Title"
          value={values.issueName}
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
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description:</Form.Label>
        <Form.Control value={values.description} onChange={handleInputChange} name="description" as="textarea" rows="3" />
      </Form.Group>
    <Button disabled={values.issueName === '' || values.description === ''} onClick={handleSubmit}>Submit</Button>
    </Form>
)
  };

export default AddIssueForm;
