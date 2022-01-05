import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

test('Categories', () => {
  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, name: '한식' },
    ],
  }));

  const { getByText } = render(<CategoriesContainer />);

  expect(getByText(/한식/)).not.toBeNull();
});
