import Item from './Item';
import Navigator from './Navigator';

function List(props) {
  const { items } = props;

  if (!items?.length) {
    return (
      <div id='breeds-list' className='ml-2 mr-2'>
        <h5 className='text-center'>There are no cats here...</h5>;
      </div>
    );
  }

  return (
    <div id='breeds-list' className='ml-2 mr-2'>
      <Navigator />
      {items?.map((breed) => (
        <Item key={breed.id} data={breed} />
      ))}
      <Navigator />
    </div>
  );
}

export default List;
