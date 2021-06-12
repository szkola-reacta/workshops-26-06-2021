// import logo from './logo.svg';
// import './App.css';

// function sum(a, b) {
//   return a + b;
// }

function Offer({ name, description, country }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{country}</p>
    </div>
  );
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

function App() {
  return (
    <div className="App">
      <Offer name="Six Suites, Old Town" description="Spokojny nocleg" country="Polska" />
      <Offer name="Hotel Arche Geologiczna" country="Polska" />
      <Offer name="Galeria Rondo Wiatraczna Apartments" country="Polska" />
      <Offer name="Hotel Miodowy Młyn" country="Polska" />
    </div>
  );
}

export default App;
