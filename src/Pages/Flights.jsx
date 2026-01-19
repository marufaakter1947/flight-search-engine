import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { MapPin, Calendar } from "lucide-react";
import FlightCard from "../Components/FlightCard";
import Loading from "./Loading";
import PriceChart from "../Components/PriceChart";

const Flights = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [from, setFrom] = useState(params.get("from") || "");
  const [to, setTo] = useState(params.get("to") || "");
  const [date, setDate] = useState(params.get("date") || "");

  const [flights, setFlights] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [loading, setLoading] = useState(false);

  // filters
  const [maxPrice, setMaxPrice] = useState(2000);
  const [stops, setStops] = useState("all");
  const [airline, setAirline] = useState("all");

  const fetchFlights = async () => {
    if (!from || !to || !date) return;

    setLoading(true);
    const res = await
     fetch(`https://fly-mate-server.vercel.app/api/flights?from=${from}&to=${to}&date=${date}`)
    // fetch(`/flights?from=${from}&to=${to}&date=${date}`)
    // fetch(`/api/flights?from=${from}&to=${to}&date=${date}`);
    const data = await res.json();

    if (Array.isArray(data)) {
      setFlights(data);
      setFiltered(data);
    } else {
      setFlights([]);
      setFiltered([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (from && to && date) fetchFlights();
  }, [date,from,to]);

  // Filter
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
  }, [stops, airline, maxPrice, flights]);

  const airlines = [...new Set(
    flights.map(f => f.itineraries[0].segments[0].carrierCode)
  )];

  // Search
  const handleSearch = () => {
    if (!from || !to || !date) return alert("Fill all fields");
    navigate(`/flights?from=${from}&to=${to}&date=${date}`);
    fetchFlights();
  };

  return (
    <div className="  py-5">

      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-sky-600">
          Search & Compare Flights
        </h1>
        <p className="text-gray-600 mt-2">
          Find the best routes with live pricing, smart filters, and real-time visual trends.
        </p>
      </div>

      {/* Search box */}
      <div className="bg-white rounded-2xl shadow p-5 grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">

        <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
          <MapPin className="text-sky-500" size={18} />
          <input
            value={from}
            onChange={e => setFrom(e.target.value.toUpperCase())}
            placeholder="From (DAC)"
            className="w-full outline-none"
          />
        </div>

        <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
          <MapPin className="text-sky-500" size={18} />
          <input
            value={to}
            onChange={e => setTo(e.target.value.toUpperCase())}
            placeholder="To (DXB)"
            className="w-full outline-none"
          />
        </div>

        <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
          <Calendar className="text-sky-500" size={18} />
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="w-full outline-none"
          />
        </div>

        <button
          onClick={handleSearch}
          className="bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-semibold"
        >
          Search Flights
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Filters */}
        <div className="bg-white rounded-xl shadow p-4 space-y-5 h-fit">

          <div>
            <p className="font-semibold">Max Price: ${maxPrice}</p>
            <input type="range" min="100" max="3000" value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)} className="w-full"/>
          </div>

          <div>
            <p className="font-semibold mb-1">Stops</p>
            <select onChange={e=>setStops(e.target.value)} className="w-full border p-2 rounded">
              <option value="all">All</option>
              <option value="0">Non-stop</option>
              <option value="1">1 Stop</option>
              <option value="2">2 Stops</option>
            </select>
          </div>

          <div>
            <p className="font-semibold mb-1">Airline</p>
            <select onChange={e=>setAirline(e.target.value)} className="w-full border p-2 rounded">
              <option value="all">All</option>
              {airlines.map(a => <option key={a}>{a}</option>)}
            </select>
          </div>

        </div>

        {/* Results */}
        <div className="lg:col-span-3 space-y-6">

          <PriceChart flights={filtered} />

          {loading && <Loading />}

          {!loading && filtered.length === 0 && (
            <p className="text-gray-500">No flights found</p>
          )}

          {!loading && filtered.map((flight, i) => (
            <FlightCard key={i} flight={flight} />
          ))}

        </div>
      </div>
    </div>
  );
};

export default Flights;
