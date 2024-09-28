import { render, screen } from '@testing-library/react';
import LinkWrapper from './link-wrapper';
import { faker } from '@faker-js/faker';

describe('LinkWrapper Component', () => {
  it('should render link and children', () => {
    const paragraph = faker.lorem.sentence();
    const link = faker.internet.url();
    render(<LinkWrapper href={link}>{paragraph}</LinkWrapper>);
    const children = screen.getByRole('link', {
      name: new RegExp(paragraph, 'i')
    });
    expect(children).toBeInTheDocument();
    expect(children).toHaveAttribute('href', link);
  });
});
