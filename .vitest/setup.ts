import '@testing-library/jest-dom/vitest';
import 'jest-styled-components';

window.scrollTo = vi.fn();

vi.mock('next/router', () => require('next-router-mock'));