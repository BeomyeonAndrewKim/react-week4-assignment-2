import { render, fireEvent } from '@testing-library/react';
import RestaurantForm from './RestaurantForm';

jest.mock('react-redux');

describe('RestaurantForm', () => {
  it('render title text correctly', () => {
    const restaurant = {
      name: '마법사주방',
      category: '이탈리안',
      address: '강남구',
    };

    const handleClick = jest.fn();
    const handleChange = jest.fn();
    const { getByText, getByDisplayValue } = render(
      <RestaurantForm restaurant={restaurant} onClick={handleClick} onChange={handleChange} />,
    );

    expect(getByDisplayValue('마법사주방')).not.toBeNull();
    expect(getByDisplayValue('이탈리안')).not.toBeNull();
    expect(getByDisplayValue('강남구')).not.toBeNull();

    expect(getByText(/등록/)).not.toBeNull();

    fireEvent.change(getByDisplayValue('강남구'), {
      target: { name: 'address', value: '서초구' },
    });
    fireEvent.click(getByText(/등록/));

    expect(handleChange).toBeCalledWith({ name: 'address', value: '서초구' });
    expect(handleClick).toBeCalled();
  });
});
