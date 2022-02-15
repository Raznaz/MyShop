import { observer } from 'mobx-react-lite';
import React from 'react';
import { Row } from 'react-bootstrap';
import deviceStore from '../../store/deviceStore';

const DeviceList = () => {
  return (
    <Row className="d-flex">
      {deviceStore.devices.map((device) => {
        return <DeviceItem key={device.id} />;
      })}
    </Row>
  );
};

export default observer(DeviceList);
