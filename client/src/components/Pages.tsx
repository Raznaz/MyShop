import { observer } from 'mobx-react-lite';
import React from 'react';
import { Pagination } from 'react-bootstrap';
import deviceStore from '../store/deviceStore';

const Pages = () => {
  const pageCount = Math.ceil(deviceStore.totalCount / deviceStore.limit);

  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination className="mt-5">
      {pages.map((page) => {
        return (
          <Pagination.Item
            active={deviceStore.page === page}
            key={page}
            onClick={() => deviceStore.setPage(page)}>
            {page}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
};

export default observer(Pages);
