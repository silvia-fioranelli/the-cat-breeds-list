import { useState, useEffect } from 'react';
import List from './components/List';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.log(error));
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container'>
      <h1 className='text-center'>The cat breeds list</h1>
      <List items={data} />
    </div>
  );
}

export default App;
