import { getBreedsListData } from '../selectors';
import { getBreedsListIsError } from '../selectors';
import { getBreedsListIsLoading } from '../selectors';

describe('selectors', () => {
  it('should return loading state', () => {
    const state = {
      breeds: {
        isLoading: true,
      },
    };

    expect(getBreedsListIsLoading(state)).toEqual(true);
  });

  it('should be return error state', () => {
    const state = {
      breeds: {
        isError: true,
      },
    };

    expect(getBreedsListIsError(state)).toEqual(true);
  });

  it('should be return data', () => {
    const state = {
      breeds: {
        data: 'Mock data',
      },
    };

    expect(getBreedsListData(state)).toEqual('Mock data');
  });
});
