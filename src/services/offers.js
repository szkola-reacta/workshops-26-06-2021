
export const fetchOffers = async () => {
  try {
    const response = await fetch('/data/offers.json');
    return response.json();
  } catch (error) {
    // console.error(error);
    // https://sentry.io/welcome/
    throw Error('Coś nie tak!');
  }
}
