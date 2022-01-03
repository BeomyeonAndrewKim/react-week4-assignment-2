import { useDispatch, useSelector } from 'react-redux';
import RestaurantForm from './RestaurantForm';
import { addRestaurant, changeRestaurantField } from './store/actions';

export default function RestaurantCreateContainer() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(addRestaurant());
  }

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  function handleChange({ name, value }) {
    dispatch(changeRestaurantField({ name, value }));
  }

  return <RestaurantForm restaurant={restaurant} onClick={handleClick} onChange={handleChange} />;
}
