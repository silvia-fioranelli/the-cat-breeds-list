import { BREEDS_ERROR, BREEDS_LOADING, BREEDS_SUCCESS } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case BREEDS_LOADING: {
      return {
        ...state,
        breeds: {
          ...state.breeds,
          isLoading: true,
          isError: false,
        },
      };
    }
    case BREEDS_ERROR: {
      return {
        ...state,
        breeds: {
          ...state.breeds,
          isLoading: false,
          isError: true,
        },
      };
    }
    case BREEDS_SUCCESS: {
      return {
        ...state,
        breeds: {
          ...state.breeds,
          isLoading: false,
          isError: false,
          data: action.data,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
