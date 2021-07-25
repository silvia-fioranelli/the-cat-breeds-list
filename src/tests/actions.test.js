import {
  BREEDS_ERROR,
  BREEDS_LOADING,
  BREEDS_SUCCESS,
  fetchBreeds,
} from '../actions';
import { API_KEY, API_URL } from '../constants';

describe('actions', () => {
  it('should handle API call success', async () => {
    const res = {
      ok: true,
      json: jest.fn().mockImplementationOnce(() => Promise.resolve('mock')),
    };
    global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve(res));
    const dispatch = jest.fn();

    await fetchBreeds()(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: BREEDS_LOADING,
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(API_URL, {
      headers: {
        accept: 'application/json',
        'x-api-key': API_KEY,
      },
      method: 'GET',
    });
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: BREEDS_SUCCESS,
      data: 'mock',
    });
  });

  it('should handle API call, fetch error', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() => Promise.reject());
    const dispatch = jest.fn();

    await fetchBreeds()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: BREEDS_LOADING,
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(API_URL, {
      headers: {
        accept: 'application/json',
        'x-api-key': API_KEY,
      },
      method: 'GET',
    });
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
    await fetchBreeds()(dispatch);

    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: BREEDS_LOADING,
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(API_URL, {
      headers: {
        accept: 'application/json',
        'x-api-key': API_KEY,
      },
      method: 'GET',
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: BREEDS_ERROR,
    });
  });
});
