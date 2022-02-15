import { observer } from 'mobx-react-lite';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import deviceStore from '../store/deviceStore';
import typeStore from '../store/typeStore';

const TypeBar = () => {
  return (
    <ListGroup>
      {typeStore.types.map((type) => {
        return (
          <ListGroup.Item
            style={{ cursor: 'pointer' }}
            active={type.id === typeStore.selectType.id}
            key={type.id}
            onClick={() => typeStore.setSelectType(type)}>
            {type.name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default observer(TypeBar);
