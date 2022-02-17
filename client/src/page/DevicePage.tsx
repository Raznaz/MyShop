import React, { useEffect } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import iphone from '../assets/iPhone-11-Pro.png';
import bigStar from '../assets/bigStar.png';
import { useParams } from 'react-router-dom';
import deviceStore from '../store/deviceStore';

const DevicePage = () => {
  const { id }: any = useParams();

  console.log('data', id);

  useEffect(() => {
    deviceStore.getOneDevice(id);
  }, []);

  console.log('DeviceItem', deviceStore.oneDevice);
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={
              process.env.REACT_APP_API_URL + '/' + deviceStore.oneDevice.img
            }
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center justify-content-center">
            <h2 style={{ textAlign: 'center' }}>
              {deviceStore.oneDevice?.name}
            </h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 32,
              }}>
              5
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}>
            <h3>{deviceStore.oneDevice?.price}</h3>
            <Button variant={'outline-dark'}>Add to cart</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Specification</h1>
        {/* {description.map((item, i) => {
          return (
            <Row
              key={item.id}
              style={{
                background: i % 2 ? 'lightgray' : 'transparent',
                padding: '10px',
              }}>
              {item.title}: {item.description}
            </Row>
          );
        })} */}
      </Row>
    </Container>
  );
};

export default DevicePage;
