import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { IModal } from '../../interfaces/IModal';

const CreateType = ({ show, onHide }: IModal) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder={'Enter name of Type'} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Add type
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;