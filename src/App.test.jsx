import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('render initial UI correctly', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [],
      restaurant: {},
    }));

    const { queryByText } = render(<App />);

    expect(queryByText(/김밥제국/)).toBeNull();
  });
});
