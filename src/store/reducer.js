const emptyRestaurant = {
  name: '',
  category: '',
  address: '',
};

export const initialState = {
  newId: 100,
  restaurants: [],
  restaurant: emptyRestaurant,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
  case 'setRestaurants': {
    const { restaurants } = payload;
    return {
      ...state,
      restaurants,
    };
  }
  case 'changeRestaurantField': {
    const { name, value } = payload;
    return {
      ...state,
      restaurant: {
        ...state.restaurant,
        [name]: value,
      },
    };
  }
  case 'addRestaurant': {
    const { newId, restaurants, restaurant } = state;
    return {
      ...state,
      newId: newId + 1,
      restaurants: [
        ...restaurants,
        { ...restaurant, id: newId },
      ],
      restaurant: emptyRestaurant,
    };
  }
  default:
    return state;
  }
}
