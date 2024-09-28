import Map from './map';
import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';

describe('Map Component', () => {
  test('should render without any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /openstreetmap/i
      })
    ).toBeInTheDocument();
  });

  test('should render with the marker in the correct position', () => {
    const places = Array.from({ length: 2 }, () => ({
      id: faker.string.uuid(),
      name: faker.location.city(),
      slug: faker.location.city().toLowerCase(),
      location: {
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude()
      }
    }));
    render(<Map places={places} />);

    places.forEach((place) =>
      expect(screen.getByTitle(new RegExp(place.slug, 'i'))).toBeInTheDocument()
    );
  });
});
