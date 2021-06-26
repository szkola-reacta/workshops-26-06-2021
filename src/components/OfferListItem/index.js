import PropTypes from 'prop-types';

const offerStyles = {
  main: {
    backgroundColor: 'white',
    padding: 10,
  },
  h2: {
    cursor: 'pointer'
  },
};

function OfferListItem({
  name,
  street,
  city,
  country,
  cover,
  handleClick,
}) {
  return (
    <div className="offer" style={offerStyles.main}>
      <div className="offer__column offer__column--w150">
        <img src={cover} alt="" />
      </div>
      <div className="offer__column">
        <h2
          onClick={() => handleClick(name)}
          style={offerStyles.h2}
        >
          {name}
        </h2>
        <p>{street}, {city}</p>
        <p>{country}</p>
      </div>
    </div>
  );
}

OfferListItem.propTypes = {
  name: PropTypes.string.isRequired,
}

OfferListItem.defaultProps = {
  street: 'Brakuje nazwy ulicy'
}

export default OfferListItem;
