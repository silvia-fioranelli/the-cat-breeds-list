function Item(props) {
  const {
    data: {
      affection_level: affectionLevel,
      image,
      name,
      short_legs: hasShortLegs,
    },
  } = props;

  return (
    <div className='d-flex flex-row'>
      <div className='m-3'>
        <img
          src={image?.url}
          style={{
            maxWidth: '18.75rem',
          }}
          alt={name}
        />
      </div>
      <div className='m-3'>
        <h5>{name}</h5>
        <p>Affection level: {affectionLevel}</p>
        <p>Short legs: {Boolean(hasShortLegs) ? '\u2714' : '\u274c'}</p>
      </div>
    </div>
  );
}

export default Item;
