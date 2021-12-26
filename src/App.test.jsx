import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('render title text correctly', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Restaurants/)).not.toBeNull();
  });
});
