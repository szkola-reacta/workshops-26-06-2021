import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { fetchOffer } from '../services';

function OfferPage() {
  const { offerId } = useParams();
  const history = useHistory();

  const [ offer, setOffer ] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchOffer(offerId);
        setOffer(data);
      } catch (error) {
        console.error(`UI Error ${error}`);
      }
    }
    fetchData();
  }, [offerId]);

  const handleClick = () => {
    if (offer) {
      history.push(`/offer/${(parseInt(offer.id, 10) + 1)}`);
    }
  }

  const Indicator = () => (<div>Loading...</div>);

  const Content = ({ offer, handleClick }) => {
    const { name, street, city, country } = offer;
    return (
      <>
        <h1>{name}</h1>
        <p>{street}, {city} {country}</p>

        <button onClick={handleClick}>Next offer</button>
      </>
    );
  }

  // const renderButton = () => {
  //   return <button>Click Me</button>
  // }

  return (
    <div>
      {offer
        ? <Content offer={offer} handleClick={handleClick} />
        : <Indicator />
      }
    </div>
  );
}

export default OfferPage;
