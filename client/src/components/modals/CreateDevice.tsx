import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { IModal } from '../../interfaces/IModal';
import brandStore from '../../store/brandStore';
import deviceStore from '../../store/deviceStore';
import typeStore from '../../store/typeStore';

const CreateDevice = ({ show, onHide }: IModal) => {
  const [info, setInfo] = useState<any>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  // const [brand, setBrand] = useState('');
  // const [type, setType] = useState('');

  useEffect(() => {
    deviceStore.getAllDevice();
    brandStore.getAllBrands();
    typeStore.getAllTypes();
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const selectFile = (e: any) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  };

  const removeInfo = (number: number) => {
    setInfo(
      info.filter((prop: { number: number }) => {
        return prop.number !== number;
      })
    );
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
          <Dropdown>
            <Dropdown.Toggle>
              {typeStore.selectType.name || 'Choose type'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {typeStore.types.map((type) => {
                return (
                  <DropdownItem
                    onClick={() => typeStore.setSelectType(type)}
                    key={type.id}>
                    {type.name}
                  </DropdownItem>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>
              {brandStore.selectBrand.name || 'Choose brand'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {brandStore.brands.map((brand) => {
                return (
                  <DropdownItem
                    onClick={() => brandStore.setSelectBrand(brand)}
                    key={brand.id}>
                    {brand.name}
                  </DropdownItem>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            placeholder="Add name "
            className="mt-3"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            placeholder="Add price"
            className="mt-3"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <Form.Control
            className="mt-3"
            type="file"
            onChange={(e) => selectFile(e)}
          />
          <hr />
          <Button variant="outline-info" onClick={addInfo}>
            Add new property
          </Button>
          {info.map((i: any) => {
            return (
              <Row key={i.number} className="mt-3">
                <Col md={4}>
                  <Form.Control placeholder="Enter name property" />
                </Col>
                <Col md={4}>
                  <Form.Control placeholder="Enter describe property" />
                </Col>
                <Col md={4}>
                  <Button
                    onClick={() => {
                      removeInfo(i.number);
                    }}
                    variant="outline-danger">
                    Delete
                  </Button>
                </Col>
              </Row>
            );
          })}
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

export default observer(CreateDevice);
