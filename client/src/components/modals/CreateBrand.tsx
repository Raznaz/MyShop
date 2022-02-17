import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { IModal } from '../../interfaces/IModal';
import brandStore from '../../store/brandStore';

const CreateBrand = ({ show, onHide }: IModal) => {
  const [brand, setBrand] = useState('');

  const handleBrandCreate = (name: string) => {
    brandStore.crateBrand(name);
    console.log('CREATED', name);
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add BRAND</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={'Enter name of Type'}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button
          variant="outline-success"
          onClick={() => handleBrandCreate(brand)}>
          Add type
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
