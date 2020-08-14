import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { API } from '../../../../utils/API';

const DeleteModal = ({ show, handleClose, projectId, name }) => {
    const handleDelete = id => {
        const { data } = API.setProjectStatus(id, 'removed', true);
        console.log(data)
        window.location.href = window.location.origin + '/projects'
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to delete <b>{name}</b></Modal.Body>
            <Modal.Footer className='d-flex justify-content-around'>
                <Button variant="primary" onClick={handleClose}>
                    No, take me back.
          </Button>
                <Button variant="danger" onClick={() => { handleDelete(projectId) }}>
                    Delete this project.
          </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal
