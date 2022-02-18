import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/Device/DeviceList';
import Pages from '../components/Pages';
import TypeBar from '../components/TypeBar';
import brandStore from '../store/brandStore';
import deviceStore from '../store/deviceStore';
import typeStore from '../store/typeStore';

const Shop = () => {
  useEffect(() => {
    deviceStore.getAllDevice(null, null, 1, 3);
    brandStore.getAllBrands();
    typeStore.getAllTypes();
  }, []);

  return (
    <Container>
      <Row className="mt-4">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
};

export default observer(Shop);
