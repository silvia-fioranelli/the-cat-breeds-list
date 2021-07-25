import { API_KEY, API_URL } from '../constants';
export const BREEDS_LOADING = 'BREEDS_LOADING';
export const BREEDS_ERROR = 'BREEDS_ERROR';
export const BREEDS_SUCCESS = 'BREEDS_SUCCESS';

export const fetchBreeds = () => (dispatch) => {
  dispatch({
    type: BREEDS_LOADING,
  });

  return fetch(API_URL, {
    headers: {
      accept: 'application/json',
      'x-api-key': API_KEY,
    },
    method: 'GET',
  })
    .then((res) => {
      if (res.ok) {
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
