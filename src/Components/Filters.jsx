const Filters = ({ flights, setStops, setAirline, setMaxPrice }) => {
  const airlines = [...new Set(
    flights.map(f => f.itineraries[0].segments[0].carrierCode)
  )];

  return (
    <div className="bg-white shadow p-4 flex flex-wrap gap-6 justify-between">

      <div>
        <p className="font-semibold mb-1">Stops</p>
        <select onChange={e=>setStops(e.target.value)} className="border p-2 rounded">
          <option value="all">All</option>
          <option value="0">Non-stop</option>
          <option value="1">1 Stop</option>
          <option value="2">2 Stops</option>
        </select>
      </div>

      <div>
        <p className="font-semibold mb-1">Airline</p>
        <select onChange={e=>setAirline(e.target.value)} className="border p-2 rounded">
          <option value="all">All</option>
          {airlines.map(a => <option key={a}>{a}</option>)}
        </select>
      </div>

      <div>
        <p className="font-semibold mb-1">Max Price ($)</p>
        <input
          type="range"
          min="50"
          max="2000"
          defaultValue="2000"
          onChange={e=>setMaxPrice(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filters;
