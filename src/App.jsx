import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';
import RestaurantCreateContainer from './RestaurantCreateContainer';
import CategoriesContainer from './CategoriesContainer';

import { loadCategories, loadRestaurants } from './store/actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurants());
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <h1>
        Restaurants
      </h1>
      <CategoriesContainer />
      <RestaurantContainer />
      <RestaurantCreateContainer />
    </div>
  );
}
