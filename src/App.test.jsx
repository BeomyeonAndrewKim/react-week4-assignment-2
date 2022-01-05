import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  it('render initial UI correctly', () => {
    const dispatch = jest.fn();
    useSelector.mockImplementation((selector) => selector({
      restaurants: [],
      restaurant: {},
      categories: [],
    }));
    useDispatch.mockImplementation(() => dispatch);

    const { queryByText } = render(<App />);

    expect(dispatch).toBeCalledTimes(2);

    expect(queryByText(/김밥제국/)).toBeNull();
  });
});
