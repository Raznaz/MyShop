import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { IModal } from '../../interfaces/IModal';
import typeStore from '../../store/typeStore';

const CreateType = ({ show, onHide }: IModal) => {
  const [type, setType] = useState('');

  const handleAddType = (type: string) => {
    console.log('handleAddType', type);
    typeStore.createType(type);
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={'Enter name of Type'}
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={() => handleAddType(type)}>
          Add type
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
