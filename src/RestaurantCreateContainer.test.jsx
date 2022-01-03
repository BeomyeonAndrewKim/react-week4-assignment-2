import { fireEvent, render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import RestaurantCreateContainer from './RestaurantCreateContainer';

jest.mock('react-redux');

describe('RestaurantsCreateContainer', () => {
  it('render title text correctly', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        name: '마법사주방',
        category: '이탈리안',
        address: '강남구',
      },
    }));

    const { getByText, getByDisplayValue } = render(<RestaurantCreateContainer />);

    expect(getByDisplayValue('마법사주방')).not.toBeNull();
    expect(getByDisplayValue('이탈리안')).not.toBeNull();
    expect(getByDisplayValue('강남구')).not.toBeNull();
    expect(getByText(/등록/)).not.toBeNull();

    fireEvent.click(getByText(/등록/));

    expect(dispatch).toBeCalledWith({
      type: 'addRestaurant',
    });

    fireEvent.change(getByDisplayValue('강남구'), {
      target: { name: 'address', value: '서초구' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeRestaurantField',
      payload: {
        name: 'address', value: '서초구',
      },
    });
  });
});
