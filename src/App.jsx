// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import { useEffect, useState } from "react";
// import Hero from "./components/Hero";
import Flights from "./components/Flights";
import Filters from "./components/Filters";
import PriceChart from "./components/PriceChart";
import Hero from "./Components/Hero";

function App() {
  const [flights, setFlights] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [stops, setStops] = useState("all");
  const [airline, setAirline] = useState("all");
  const [maxPrice, setMaxPrice] = useState(10000);

  useEffect(() => {
    let data = [...flights];

    if (stops !== "all") {
      data = data.filter(
        f => f.itineraries[0].segments.length - 1 === Number(stops)
      );
    }

    if (airline !== "all") {
      data = data.filter(
        f => f.itineraries[0].segments[0].carrierCode === airline
      );
    }

    data = data.filter(
      f => Number(f.price.grandTotal) <= maxPrice
    );

    setFiltered(data);
  }, [flights, stops, airline, maxPrice]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Hero setFlights={setFlights} />

      <Filters
        flights={flights}
        setStops={setStops}
        setAirline={setAirline}
        setMaxPrice={setMaxPrice}
      />

      <PriceChart flights={filtered} />

      <Flights flights={filtered} />
    </div>
  );
}

export default App;
