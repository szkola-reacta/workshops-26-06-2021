
export const fetchOffers = async () => {
  try {
    // fetch('/data/offers.json')
    // .then(response => response.json())
    // .then(data => console.log(data))
    const response = await fetch('/data/offers.json');
    const data = await response.json();

    // modify your data as you want 🎉

    return data;
  } catch (_error) {
    // console.error(error);
    // https://sentry.io/welcome/
    throw Error('Coś nie tak!');
  }
}

export const fetchOffer = async (offerId) => {
  try {
    const response = await fetch('/data/offers.json');
    const data = await response.json();

    // modify your data as you want 🎉

    const filteredResults = data.filter((elem) => {
      // elem.id - response from z JSON
      // offerId - value of router param
      return parseInt(elem.id, 10) === parseInt(offerId, 10);
      // return elem.id === offerId;
    });

    if (filteredResults.length) {
      return filteredResults[0];
    } else {
      throw Error('Nie znaleziono');
    }
  } catch (_error) {
    throw Error('Coś nie tak ;)');
  }
}