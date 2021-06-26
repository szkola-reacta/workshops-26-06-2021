
export const fetchOffers = async () => {
  try {
    // fetch('/data/offers.json')
    // .then(response => response.json())
    // .then(data => console.log(data))
    const response = await fetch('/data/offers.json');
    const data = await response.json();

    // modify your data as you want 🎉

    return data;
  } catch (error) {
    // console.error(error);
    // https://sentry.io/welcome/
    throw Error('Coś nie tak!');
  }
}
