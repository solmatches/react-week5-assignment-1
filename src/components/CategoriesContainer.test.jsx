import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import initialState from '../../fixture/initialState';
import categories from '../../fixture/categories';

import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    ...initialState,
    categories,
  }));

  it('레스토랑 업종 목록을 호출한다.', () => {
    const { getByText } = render(<CategoriesContainer />);

    expect(dispatch).toBeCalledTimes(1);

    expect(getByText(/한식/)).toBeInTheDocument();
  });

  describe('handleClick이 호출되면', () => {
    it('selectCategoryId 함수에 props로 받은 id를 전달하여 호출한다.', () => {
      const { getByText } = render(<CategoriesContainer />);

      fireEvent.click(getByText(categories[0].name, { exact: false }));

      expect(dispatch).toBeCalledWith({
        type: 'selectCategoryId',
        payload: { selectCategoryId: categories[0].id },
      });
    });
  });
});
