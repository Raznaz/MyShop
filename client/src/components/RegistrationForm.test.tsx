import { fireEvent, render, screen } from '@testing-library/react';
import RegistrationForm from './RegistrationForm';

describe('component Registration form', () => {
  it('should ', () => {
    render(<RegistrationForm />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    const element = screen.getByRole('textbox');

    expect(element).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  // it('placeholder', () => {
  //   render(<RegistrationForm />);
  //   expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  // });
  it('value', () => {
    render(<RegistrationForm />);
    expect(screen.queryByDisplayValue('password')).toBeNull();
  });
  it('fireEvent', () => {
    render(<RegistrationForm />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'React' },
    });
  });
});
