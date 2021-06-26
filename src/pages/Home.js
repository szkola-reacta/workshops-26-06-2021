import { useState, useEffect } from 'react';

import { fetchOffers, fetchPosts } from '../services';
import OfferListItem from '../components/OfferListItem';

function Home() {

  const [offers, setOffers] = useState([]);
  // const selectedOffer = 'Cozy flat';
  const [selectedOffer, setSelectedOffer] = useState('Cozy flat');
  const [data, setData] = useState([]);
  // 0 - variable
  // 1 - callback

  useEffect(() => {
    setSelectedOffer('🐼 🐼 🐼');
  }, []);

  useEffect(() => {
    setData(fetchPosts());
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchOffers();
        setOffers(data);
      } catch (error) {
        // UI - error notification
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Wybrano: {selectedOffer}</h1>
      </div>

      {offers.map((elem) =>
        <OfferListItem
          key={`offer-${elem.id}`}
          // offerObj={elem}
          name={elem.name}
          street={elem.street}
          city={elem.city}
          country={elem.country}
          cover={elem.cover}
          handleClick={setSelectedOffer}
        />
      )}
    </div>
  );
}

export default Home;
