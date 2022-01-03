import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import RestaurantContainer from './RestaurantContainer';
import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  it('render title text correctly', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));

    const { getByText } = render(<RestaurantContainer />);

    expect(getByText(/김밥제국/)).not.toBeNull();
  });
});
