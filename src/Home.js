import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

// function sum(a, b) {
//   return a + b;
// }

const listBackground = {
  backgroundColor: 'white',
  padding: 10,
};

function Offer({
  name,
  description,
  country,
  cover,
  handleClick,
}) {
  return (
    <div className="offer" style={listBackground}>
      <div className="offer__column offer__column--w150">
        <img src={cover} alt="" />
      </div>
      <div className="offer__column">
        <h2
          onClick={() => handleClick(name)}
          style={{ cursor: 'pointer' }}
        >
          {name}
        </h2>
        <p>{description}</p>
        <p>{country}</p>
      </div>
    </div>
  );
}

Offer.propTypes = {
  name: PropTypes.string.isRequired,
}

Offer.defaultProps = {
  description: 'Brakuje opisu'
}

// function Offer(props) {
//   const { name, description, country } = props;
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{description}</p>
//       <p>{country}</p>
//     </div>
//   );
// }

function Home() {

  // const selectedOffer = 'Cozy flat';
  const [selectedOffer, setSelectedOffer] = useState('Cozy flat');
  const [data, setData] = useState([]);
  // 0 - variable
  // 1 - callback

  useEffect(() => {
    setSelectedOffer('🐼 🐼 🐼');
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setData(data))
  }, [])

  return (
    <div className="App">
      <div>
        <h1>Wybrano: {selectedOffer}</h1>
      </div>

      <Offer
        name="Six Suites, Old Town"
        description="Spokojny nocleg"
        country="Polska"
        cover="https://cf.bstatic.com/xdata/images/hotel/square90/79172064.webp?k=9af8e5c75879a392d627595f8fad96d205e23ed264ec3744476b57805fa28731&o="
        handleClick={setSelectedOffer}
      />
      <Offer
        name="Hotel Arche Geologiczna"
        country="Polska"
        cover="https://cf.bstatic.com/xdata/images/hotel/square90/192541890.webp?k=179376106102b1cde30c1b2fd7f220f1047d3015427af40d04e0a7bb1ecd16eb&o="
        handleClick={setSelectedOffer}
      />
      <Offer
        name="Galeria Rondo Wiatraczna Apartments"
        country="Polska"
        cover="https://cf.bstatic.com/xdata/images/hotel/square90/164843364.webp?k=c9b83ddbec06f9602cd3acd75506a03bc5bf250384193109fe665682f780b3ce&o="
        handleClick={setSelectedOffer}
      />
      <Offer
        name="Hotel Miodowy Młyn"
        country="Polska"
        cover="https://cf.bstatic.com/xdata/images/hotel/square90/30873029.webp?k=dea5daa25f917081221d64f1e3cb8c0d1094c40dfc00b612b508973f597aba4e&o="
        handleClick={setSelectedOffer}
      />
    </div>
  );
}

export default Home;
