function Item(props) {
  const {
    data: {
      affection_level: affectionLevel,
      description,
      image,
      name,
      short_legs: hasShortLegs,
      temperament
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
        <p>{temperament}</p>
        <p class="font-italic">"{description}"</p>
      </div>
    </div>
  );
}

export default Item;
