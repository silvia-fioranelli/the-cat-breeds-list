export const getBreedsListIsLoading = (state) => {
  return Boolean(state.breeds.isLoading);
};

export const getBreedsListIsError = (state) => {
  return Boolean(state.breeds.isError);
};

export const getBreedsListData = (state) => {
  return state.breeds.data;
};

export const getCurrentPage = (state) => {
  return state.currentPage;
};

export const getHasPreviousPage = (state) => {
  return state.currentPage > 0;
};

export const getHasNextPage = (state) => {
  return state.currentPage < getTotalPages(state);
};

export const getPageSize = (state) => {
  return state.pageSize;
};

export const getTotalPages = (state) => {
  return Math.floor(state.totalItems / state.pageSize);
};