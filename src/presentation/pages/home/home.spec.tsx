import { render, screen } from '@testing-library/react';
import Home from '@/presentation/pages/home/home';

describe('Home', () => {
  test('should render the heading', () => {
    const { container } = render(<Home />);

    expect(
      screen.getByRole('heading', { name: /Next.js Boilerplate/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render the colors correctly', () => {
    const { container } = render(<Home />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
