const FlightCard = ({ flight }) => {
  const seg = flight.itineraries[0].segments[0];

  return (
    <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
      <div>
        <h3 className="font-bold">
          {seg.departure.iataCode} → {seg.arrival.iataCode}
        </h3>
        <p className="text-sm text-gray-500">
          {seg.carrierCode} • {seg.number}
        </p>
      </div>

      <div className="text-center">
        <p className="font-bold text-lg">${flight.price.total}</p>
        <button className="mt-1 px-4 py-2 bg-sky-500 text-white rounded-lg text-sm">
          View Deal
        </button>
      </div>
    </div>
  );
};

export default FlightCard;
