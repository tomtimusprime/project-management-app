import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { API } from '../../../../utils/API';

const DeleteModal = ({ show, handleClose, projectId }) => {
    const handleDelete = id => {
        const { data } = API.deleteProject(id);
        window.location.href = window.location.origin + '/projects'
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to delete Prject NAme?</Modal.Body>
            <Modal.Footer className='d-flex justify-content-around'>
                <Button variant="primary" onClick={handleClose}>
                    No, take me back.
          </Button>
                <Button variant="danger" onClick={() => { handleDelete(projectId) }}>
                    Delete
          </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal
