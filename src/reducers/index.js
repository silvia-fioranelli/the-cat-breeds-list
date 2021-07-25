import {
  BREEDS_ERROR,
  BREEDS_LOADING,
  BREEDS_SUCCESS,
  NAVIGATE_NEXT,
  NAVIGATE_PREVIOUS,
  SET_TOTAL_ITEMS,
} from '../actions';

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

    case NAVIGATE_NEXT: {
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    }

    case NAVIGATE_PREVIOUS: {
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    }

    case SET_TOTAL_ITEMS: {
      return {
        ...state,
        totalItems: action.totalItems,
      };
    }

    default:
      return state;
  }
};

export default reducer;
