import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import iphone from '../assets/iPhone-11-Pro.png';
import bigStar from '../assets/bigStar.png';

const DevicePage = () => {
  const description = [
    { id: 1, title: 'Memory', description: '5 Gb' },
    { id: 2, title: 'Camera', description: '40 Mpx' },
    { id: 3, title: 'Processor', description: 'Inter i7' },
    { id: 4, title: 'Count core', description: '8' },
    { id: 5, title: 'Battery', description: '4000' },
  ];
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={iphone} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center justify-content-center">
            <h2 style={{ textAlign: 'center' }}>EXAMPLE device name</h2>
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
            <h3>Price: 34343</h3>
            <Button variant={'outline-dark'}>Add to cart</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Specification</h1>
        {description.map((item, i) => {
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
        })}
      </Row>
    </Container>
  );
};

export default DevicePage;
