import Item from './Item';

function List(props) {
  const { items } = props;

  return (
    <div className="ml-2 mr-2">
      {items?.map((breed) => (
        <Item key={breed.id} data={breed} />
      ))}
    </div>
  );
}

export default List;
