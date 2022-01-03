import RestaurantContainer from './RestaurantContainer';
import RestaurantCreateContainer from './RestaurantCreateContainer';

export default function App() {
  return (
    <div>
      <h1>
        Restaurants
      </h1>
      <RestaurantContainer />
      <RestaurantCreateContainer />
    </div>
  );
}
