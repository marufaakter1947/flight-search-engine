import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
// import FlightCard from "../components/FlightCard";
import Loading from "./Loading";
import FlightCard from "../Components/FlightCard";

const Flights = () => {
  const [params] = useSearchParams();
  const from = params.get("from");
  const to = params.get("to");
  const date = params.get("date");

  const [flights, setFlights] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/flights?from=${from}&to=${to}&date=${date}`)
      .then(res => res.json())
      .then(data => {
  if (!Array.isArray(data)) {
    setFlights([]);
    setFiltered([]);
  } else {
    setFlights(data);
    setFiltered(data);
  }
  setLoading(false);
});

  }, [date,from,to]);

  useEffect(() => {
    setFiltered(flights.filter(f => f.price.total <= maxPrice));
  }, [maxPrice, flights]);

  if (loading) return <p className="p-10"> <Loading></Loading> </p>;

  return (
    <div className="  grid grid-cols-1 lg:grid-cols-4 gap-6">
      
      {/* Filters */}
      <div className="bg-white rounded-xl shadow p-4 h-fit">
        <h3 className="font-bold mb-3">Max Price: ${maxPrice}</h3>
        <input
          type="range"
          min="100"
          max="2000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Results */}
      <div className="lg:col-span-3 space-y-4">
       {filtered.length === 0 && (
  <p className="text-gray-500">No flights found</p>
)}

{filtered.map((flight, i) => (
  <FlightCard key={i} flight={flight} />
))}

      </div>
    </div>
  );
};

export default Flights;
