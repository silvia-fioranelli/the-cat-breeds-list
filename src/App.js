import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBreeds as fetchBreedsAlias } from './actions';
import List from './components/List';
import {
  getBreedsListData,
  getBreedsListIsError,
  getBreedsListIsLoading,
} from './selectors';

function App(props) {
  const { data, isError, isLoading, fetchBreeds } = props;

  useEffect(() => {
    fetchBreeds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderList = () => {
    if (isError) {
      return <h5 className='text-center'>Error, please retry!</h5>;
    }

    if (isLoading) {
      return (
        <h5 className='text-center'>Cats are on the way, please wait...</h5>
      );
    }

    return <List items={data} />;
  };

  return (
    <div className='container'>
      <h1 className='text-center'>The cat breeds list</h1>
      {renderList()}
    </div>
  );
}

const mapState = (state) => {
  return {
    data: getBreedsListData(state),
    isLoading: getBreedsListIsLoading(state),
    isError: getBreedsListIsError(state),
  };
};

const mapDispatch = {
  fetchBreeds: fetchBreedsAlias,
};

export default connect(mapState, mapDispatch)(App);
