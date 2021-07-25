import { useState, useEffect } from 'react';
import List from './components/List';

function App() {
  const [{ isLoading, isError, data }, setData] = useState({
    isLoading: false,
    isError: false,
    data: null,
  });

  useEffect(() => {
    setData({ isLoading: true, isError: false });
    fetch('https://api.thecatapi.com/v1/breeds')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Error');
        }
      })
      .then((res) => setData({ data: res, isLoading: false, isError: false }))
      .catch(() => setData({ isLoading: false, isError: true }));
  }, []);

  const renderList = () => {
    if (isError) {
      return <h5 className='text-center'>Error, please retry!</h5>;
    }
  
    if (isLoading) {
      return <h5 className="text-center">Loading...</h5>;
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

export default App;
