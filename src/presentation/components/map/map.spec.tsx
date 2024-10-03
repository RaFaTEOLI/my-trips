import Map from './map';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import mockRouter from 'next-router-mock';

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
      expect(screen.getByTitle(new RegExp(place.name, 'i'))).toBeInTheDocument()
    );
  });

  test('should navigate to place page on marker click', async () => {
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

    await userEvent.click(screen.getByTitle(new RegExp(places[0].name, 'i')));
    expect(mockRouter).toMatchObject({
      asPath: `/place/${places[0].slug}`,
      pathname: `/place/${places[0].slug}`
    });
  });
});
