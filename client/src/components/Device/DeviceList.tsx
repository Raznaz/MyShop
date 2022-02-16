import { observer } from 'mobx-react-lite';
import React from 'react';
import { Row } from 'react-bootstrap';
import deviceStore from '../../store/deviceStore';
import DeviceItem from './DeviceItem';

const DeviceList = () => {
  return (
    <Row className="d-flex">
      {deviceStore.devices.map((device) => {
        return <DeviceItem key={device.id} {...device} />;
      })}
    </Row>
  );
};

export default observer(DeviceList);
