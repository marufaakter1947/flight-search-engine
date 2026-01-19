import { useNavigate } from "react-router";
const FlightCard = ({ flight }) => {
    const navigate = useNavigate();
  const seg = flight.itineraries[0].segments[0];

  const handleViewDeal = ()=>{
    // navigate("/deals");
     navigate("/deals", { state: { flight } });
  }

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
        <button onClick={handleViewDeal} className="mt-1 px-4 py-2 bg-sky-500 text-white rounded-lg text-sm cursor-pointer">
          View Deal
        </button>
      </div>
    </div>
  );
};

export default FlightCard;
