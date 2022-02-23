import { render, screen } from '@testing-library/react';
import RegistrationForm from './RegistrationForm';

describe('component Registration form', () => {
  it('should ', () => {
    render(<RegistrationForm />);
    screen.getByText(/text/i);
  });
});
