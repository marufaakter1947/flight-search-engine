import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";

const MyTrips = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);

useEffect(() => {
  if (!user) return;

  const booked = JSON.parse(localStorage.getItem("myTrips") || "[]");

  // filter only for current user
  const userTrips = booked.filter(flight => flight.userId === user.uid);
  setTrips(userTrips);
}, [user]);

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  // if user is not available
  if (!user)
    return (
      <div className="text-center mt-10 text-gray-500">
        Please sign in to view your trips.
        <br />
        <button
          onClick={() => navigate("/login")}
          className="mt-3 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
        >
          Go to Login
        </button>
      </div>
    );

  return (
    <div className="py-3">
      <h1 className="text-3xl md:text-4xl font-extrabold text-sky-600 mb-2 text-center">My Trips</h1>
      <p className="text-gray-600 mt-2 text-center mb-8">From past trips to future adventures, view all of my flight bookings here.</p>

      {trips.length === 0 ? (
        <p className="text-gray-500">You have not booked any flights yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-xl">
            <thead className="bg-sky-100">
              <tr>
                <th className="text-left px-4 py-2">Route</th>
                <th className="text-left px-4 py-2">Duration</th>
                <th className="text-left px-4 py-2">Departure</th>
                <th className="text-left px-4 py-2">Arrival</th>
                <th className="text-left px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {trips.map((trip, i) =>
                trip.itineraries.map((itin, j) => (
                  <tr key={`${i}-${j}`} className="border-t">
                    <td className="px-4 py-2">
                      {itin.segments[0].departure.iataCode} → {itin.segments.at(-1).arrival.iataCode}
                    </td>
                    <td className="px-4 py-2">{itin.duration}</td>
                    <td className="px-4 py-2">{new Date(itin.segments[0].departure.at).toLocaleString()}</td>
                    <td className="px-4 py-2">{new Date(itin.segments.at(-1).arrival.at).toLocaleString()}</td>
                    <td className="px-4 py-2">${trip.price.grandTotal}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTrips;
