import { render, screen } from '@testing-library/react';
import DeviceItem from './DeviceItem';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from '../../App';

describe('Name of the group', () => {
  it('should have smt ', () => {
    render(<DeviceItem id={0} name={''} price={0} rating={0} img={''} />);
    const linkElement = screen.getByAltText(/device/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should router history.push', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <App />
      </Router>
    );
  });
});
