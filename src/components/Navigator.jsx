import { connect } from 'react-redux';
import {
  navigateToNextPage as navigateToNextPageAlias,
  navigateToPreviousPage as navigateToPreviousPageAlias,
} from '../actions';
import {
  getCurrentPage,
  getHasNextPage,
  getHasPreviousPage,
  getTotalPages,
} from '../selectors';

export const Navigator = (props) => {
  const {
    currentPage,
    hasNextPage,
    hasPreviousPage,
    navigateToNextPage,
    navigateToPreviousPage,
    totalPages,
  } = props;

  return (
    <div className='mt-3 mb-3 d-flex justify-content-around'>
      <button
        className='btn btn-primary'
        disabled={!hasPreviousPage}
        onClick={navigateToPreviousPage}
      >
        Previous
      </button>
      <span>{`Page ${currentPage + 1} of ${totalPages + 1}`}</span>
      <button
        className='btn btn-primary'
        disabled={!hasNextPage}
        onClick={navigateToNextPage}
      >
        Next
      </button>
    </div>
  );
};

const mapState = (state) => ({
  currentPage: getCurrentPage(state),
  hasNextPage: getHasNextPage(state),
  hasPreviousPage: getHasPreviousPage(state),
  totalPages: getTotalPages(state),
});

const mapDispatch = {
  navigateToNextPage: navigateToNextPageAlias,
  navigateToPreviousPage: navigateToPreviousPageAlias,
};

export default connect(mapState, mapDispatch)(Navigator);
