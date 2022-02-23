import { render } from '@testing-library/react';
import CreateType from './CreateType';

describe('Name of the group', () => {
  it('should ', () => {
    render(
      <CreateType
        show={false}
        onHide={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
  });
});
