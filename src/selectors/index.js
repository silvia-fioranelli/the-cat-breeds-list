export const getBreedsListIsLoading = (state) => {
  return state.breeds.isLoading;
};

export const getBreedsListIsError = (state) => {
  return state.breeds.isError;
};

export const getBreedsListData = (state) => {
  return state.breeds.data;
};
