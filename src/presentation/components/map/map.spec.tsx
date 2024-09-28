import Map from './map';
import { render, screen } from '@testing-library/react';

describe('Map Component', () => {
  test('should render without any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /openstreetmap/i
      })
    ).toBeInTheDocument();
  });
});
