import { API_KEY, API_URL } from '../constants';
import { getCurrentPage, getPageSize } from '../selectors';

export const BREEDS_LOADING = 'BREEDS_LOADING';
export const BREEDS_ERROR = 'BREEDS_ERROR';
export const BREEDS_SUCCESS = 'BREEDS_SUCCESS';

export const NAVIGATE_PREVIOUS = 'NAVIGATE_PREVIOUS';
export const NAVIGATE_NEXT = 'NAVIGATE_NEXT';

export const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS';

export const fetchBreeds = () => (dispatch, getState) => {
  const state = getState();
  const currentPage = getCurrentPage(state);
  const pageSize = getPageSize(state);

  dispatch({
    type: BREEDS_LOADING,
  });

  const url = `${API_URL}?limit=${pageSize}&page=${currentPage}`;

  return fetch(url, {
    headers: {
      accept: 'application/json',
      'x-api-key': API_KEY,
    },
    method: 'GET',
  })
    .then((res) => {
      if (res.ok) {
        dispatch({
          type: SET_TOTAL_ITEMS,
          totalItems: Number(res.headers.get('pagination-count')),
        });

        return res.json();
      } else {
        throw new Error('fetch not ok');
      }
    })
    .then((json) => {
      dispatch({
        type: BREEDS_SUCCESS,
        data: json,
      });
    })
    .catch(() => {
      dispatch({
        type: BREEDS_ERROR,
      });
    });
};

export const navigateToPreviousPage = () => (dispatch) => {
  dispatch({
    type: NAVIGATE_PREVIOUS,
  });

  return dispatch(fetchBreeds());
};

export const navigateToNextPage = () => (dispatch) => {
  dispatch({
    type: NAVIGATE_NEXT,
  });

  return dispatch(fetchBreeds());
};
