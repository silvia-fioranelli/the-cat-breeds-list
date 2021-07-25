import {
  BREEDS_ERROR,
  BREEDS_LOADING,
  BREEDS_SUCCESS,
  fetchBreeds,
  SET_TOTAL_ITEMS,
} from '../actions';
import { API_KEY } from '../constants';

describe('actions', () => {
  it('should handle API call success', async () => {
    const res = {
      ok: true,
      json: jest.fn().mockImplementationOnce(() => Promise.resolve('mock')),
      headers: new Map().set('pagination-count', '5'),
    };
    global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve(res));
    const dispatch = jest.fn();
    const state = {
      currentPage: 1,
      pageSize: 10,
    };
    const getState = jest.fn(() => state);

    await fetchBreeds()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: BREEDS_LOADING,
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.thecatapi.com/v1/breeds?limit=10&page=1',
      {
        headers: {
          accept: 'application/json',
          'x-api-key': API_KEY,
        },
        method: 'GET',
      }
    );
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: SET_TOTAL_ITEMS,
      totalItems: 5,
    });
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(3, {
      type: BREEDS_SUCCESS,
      data: 'mock',
    });
  });

  it('should handle API call, fetch error', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() => Promise.reject());
    const dispatch = jest.fn();
    const state = {
      currentPage: 1,
      pageSize: 10,
    };
    const getState = jest.fn(() => state);

    await fetchBreeds()(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: BREEDS_LOADING,
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.thecatapi.com/v1/breeds?limit=10&page=1',
      {
        headers: {
          accept: 'application/json',
          'x-api-key': API_KEY,
        },
        method: 'GET',
      }
    );
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: BREEDS_ERROR,
    });
  });

  it('should handle API call, response not ok', async () => {
    const res = {
      ok: false,
    };
    global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve(res));
    const dispatch = jest.fn();
    const state = {
      currentPage: 1,
      pageSize: 10,
    };
    const getState = jest.fn(() => state);

    await fetchBreeds()(dispatch, getState);

    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: BREEDS_LOADING,
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.thecatapi.com/v1/breeds?limit=10&page=1',
      {
        headers: {
          accept: 'application/json',
          'x-api-key': API_KEY,
        },
        method: 'GET',
      }
    );
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: BREEDS_ERROR,
    });
  });
});
