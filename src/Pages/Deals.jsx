// import { useEffect, useState } from "react";
// import { useLocation } from "react-router";
// import Loading from "./Loading";

// const Deals = () => {
//   const location = useLocation();
//   const flight = location.state?.flight; // Flight data from FlightCard
//   const [details, setDetails] = useState(flight || null);
//   const [loading, setLoading] = useState(!flight);

//   useEffect(() => {
//     if (!flight) {
//       fetch("http://localhost:5000/deals")
//         .then(res => res.json())
//         .then(data => setDetails(data[0] || null))
//         .finally(() => setLoading(false));
//     }
//   }, [flight]);

//   if (loading) return <Loading />;

//   if (!details) return <p className="text-center text-gray-500">No deal data available</p>;

//   return (
//     <div className=" py-5">
//       <div className="text-center mb-5">
//         <h1 className="text-3xl md:text-4xl font-extrabold text-sky-600">Flight Deal Details</h1>
//         <p className="text-gray-600 mt-2">
//           Complete information about your selected flight
//         </p>
//       </div>

//       <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
//         <h2 className="font-bold text-xl">{details.itineraries ? `${details.itineraries[0].segments[0].departure.iataCode} → ${details.itineraries[0].segments.at(-1).arrival.iataCode}` : details.title}</h2>

//         {details.itineraries && details.itineraries.map((itin, i) => (
//           <div key={i} className="border p-4 rounded-lg space-y-2">
//             <p><span className="font-semibold">Duration:</span> {itin.duration}</p>
//             {itin.segments.map((seg, j) => (
//               <div key={j} className="flex justify-between text-gray-700">
//                 <p>{seg.departure.iataCode} → {seg.arrival.iataCode}</p>
//                 <p>{seg.carrierCode} | Flight {seg.number}</p>
//                 <p>{new Date(seg.departure.at).toLocaleString()} → {new Date(seg.arrival.at).toLocaleString()}</p>
//               </div>
//             ))}
//           </div>
//         ))}

//         <p className="font-bold text-sky-600 text-lg">
//           Price: ${details.price?.grandTotal || details.price}
//         </p>

//         <a
//           href="#"
//           className="bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-sky-600 transition"
//         >
//           Book Now
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Deals;
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Loading from "./Loading";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import toast, { Toaster } from "react-hot-toast";

const Deals = () => {
  const location = useLocation();
  const flight = location.state?.flight;
  const [details, setDetails] = useState(flight || null);
  const [loading, setLoading] = useState(!flight);

  // Generate price trend for chart (mock data if needed)
  const [priceTrend, setPriceTrend] = useState([]);

  useEffect(() => {
    if (!flight) {
      fetch("http://localhost:5000/deals")
        .then(res => res.json())
        .then(data => {
          setDetails(data[0] || null);
          if (data[0]?.price) {
            setPriceTrend([
              { time: "Now", price: Number(data[0].price.grandTotal) },
              { time: "1h later", price: Number(data[0].price.grandTotal) + 10 },
              { time: "2h later", price: Number(data[0].price.grandTotal) + 5 },
            ]);
          }
        })
        .finally(() => setLoading(false));
    } else {
      if (flight?.price?.grandTotal) {
        setPriceTrend([
          { time: "Now", price: Number(flight.price.grandTotal) },
          { time: "1h later", price: Number(flight.price.grandTotal) + 10 },
          { time: "2h later", price: Number(flight.price.grandTotal) + 5 },
        ]);
      }
    }
  }, [flight]);

  if (loading) return <Loading />;

  if (!details) return <p className="text-center text-gray-500">No deal data available</p>;

  const handleBook = () => {
    toast.success("This flight booked successfully!");
  };

  return (
    <div className="py-5 max-w-5xl mx-auto px-4">
      <Toaster position="top-right" />
      
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-sky-600">Flight Deal Details</h1>
        <p className="text-gray-600 mt-2">Complete information about your selected flight</p>
      </div>

      {/* Deal Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6 relative">
        
        {/* Discount Badge */}
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
          30% OFF
        </div>

        {/* Flight Route */}
        <h2 className="font-bold text-xl mb-2">
          {details.itineraries ? `${details.itineraries[0].segments[0].departure.iataCode} → ${details.itineraries[0].segments.at(-1).arrival.iataCode}` : details.title}
        </h2>

        {/* Flight Segments */}
        {details.itineraries && details.itineraries.map((itin, i) => (
          <div key={i} className="border p-4 rounded-lg space-y-2">
            <p><span className="font-semibold">Duration:</span> {itin.duration}</p>
            {itin.segments.map((seg, j) => (
              <div key={j} className="flex justify-between text-gray-700">
                <p>{seg.departure.iataCode} → {seg.arrival.iataCode}</p>
                <p>{seg.carrierCode} | Flight {seg.number}</p>
                <p>{new Date(seg.departure.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} → {new Date(seg.arrival.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
              </div>
            ))}
          </div>
        ))}

        {/* Price */}
        <p className="font-bold text-sky-600 text-lg">Price: ${details.price?.grandTotal || details.price}</p>

        {/* Price Trend Chart */}
        {priceTrend.length > 0 && (
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceTrend}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#0EA5E9" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Book Now Button */}
        <button
          onClick={handleBook}
          className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold transition transform hover:scale-105"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Deals;
