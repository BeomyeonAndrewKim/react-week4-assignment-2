import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  const { getByText } = render(<App />);

  expect(getByText(/Restaurants/)).not.toBeNull();
});
