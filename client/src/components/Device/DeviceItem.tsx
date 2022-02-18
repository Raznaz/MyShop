import React, { useEffect } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { IDevice } from '../../interfaces/IDevice';
import star from '../../assets/star.png';
import iphone from '../../assets/iPhone-11-Pro.png';
import { useHistory, useParams } from 'react-router-dom';
import { DEVICE_ROUTE } from '../../utils/constats';
import deviceStore from '../../store/deviceStore';

const DeviceItem = ({ id, img, name, rating, price }: IDevice) => {
  const history = useHistory();

  return (
    <Col
      md={3}
      className={'mt-3'}
      onClick={() => history.push(DEVICE_ROUTE + '/' + id)}>
      <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
        <Image width={150} height={150} src={`http://localhost:5000/` + img} />
        <div className="d-flex justify-content-between align-items-center mt-1">
          <div>{price}</div>{' '}
          <div className="d-flex justify-content-between align-items-center">
            <div>{rating}</div>
            <Image src={star} />
          </div>
        </div>
        <div>name: {name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
