import { observer } from 'mobx-react-lite';
import React from 'react';
import { Card, Row } from 'react-bootstrap';
import brandStore from '../store/brandStore';

const BrandBar = () => {
  return (
    <Row className="d-flex">
      {brandStore.brands.map((brand) => {
        return (
          <Card
            border={brand.id === brandStore.selectBrand.id ? 'danger' : 'light'}
            key={brand.id}
            className="p-2"
            style={{ width: 'auto', marginRight: '20px', cursor: 'pointer' }}
            onClick={() => brandStore.setSelectBrand(brand)}>
            {brand.name}
          </Card>
        );
      })}
    </Row>
  );
};

export default observer(BrandBar);
