import reducer from './reducer';

import { setRestaurants, changeRestaurantField, addRestaurant } from './actions';

import restaurants from '../../fixtures/restaurants';

describe('reducer', () => {
  context('default with initial state', () => {
    const initialState = {
      newId: 100,
      restaurants: [],
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
    };
    it('return default state when wrong action is passed', () => {
      const state = reducer(initialState, {});

      expect(state).toMatchObject(initialState);
    });

    it('return default state when state is not passed to reducer', () => {
      const state = reducer(undefined, {});

      expect(state).toMatchObject(initialState);
    });
  });

  context('setRestaurants', () => {
    it('reset restaurants state', () => {
      const initialState = {
        restaurants: [],
      };
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  context('changeRestaurantField', () => {
    it('change restaurant form', () => {
      const initialState = {
        restaurant: {
          name: '이름',
          category: '분류',
          address: '주소',
        },
      };
      const state = reducer(initialState, changeRestaurantField({
        name: 'name',
        value: '마법사주방',
      }));

      expect(state.restaurant.name).toBe('마법사주방');
    });
  });

  context('addRestaurant', () => {
    it('appends restaurant into restaurants and clear restaurant form', () => {
      const initialState = {
        newId: 101,
        restaurants: [],
        restaurant: {
          name: '마법사주방',
          category: '이탈리안',
          address: '서울시 강남구 역삼동',
        },
      };

      const state = reducer(initialState, addRestaurant());

      expect(state.restaurants).toHaveLength(1);
      expect(state.restaurant.name).toBe('');

      const restaurant = state.restaurants[state.restaurants.length - 1];
      expect(restaurant.id).toBe(101);
      expect(restaurant.name).toBe('마법사주방');

      expect(state.newId).toBe(102);
    });
  });
});
