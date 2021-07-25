import { BREEDS_ERROR, BREEDS_LOADING, BREEDS_SUCCESS } from '../actions';
import reducer from '../reducers';

describe('reducers', () => {
  it('should handle loading case', () => {
    const state = {
      breeds: {},
    };
    const action = {
      type: BREEDS_LOADING,
    };

    expect(reducer(state, action)).toEqual({
      breeds: {
        ...state.breeds,
        isLoading: true,
        isError: false,
      },
    });
  });

  it('should handle error case', () => {
    const state = {
      breeds: {},
    };
    const action = {
      type: BREEDS_ERROR,
    };

    expect(reducer(state, action)).toEqual({
      breeds: {
        ...state.breeds,
        isLoading: false,
        isError: true,
      },
    });
  });

  it('should handle success case', () => {
    const state = {
      breeds: {},
    };

    const action = {
      type: BREEDS_SUCCESS,
      data: 'Mock data',
    };

    expect(reducer(state, action)).toEqual({
      breeds: {
        ...state.breeds,
        isLoading: false,
        isError: false,
        data: 'Mock data',
      },
    });
  });

  it('should handle default case', () => {
    const action = {
      type: undefined,
    };

    const state = {};
    expect(reducer(state, action)).toBe(state);
  });
});
