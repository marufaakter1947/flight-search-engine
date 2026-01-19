import { Plane } from "lucide-react";
import { Link } from "react-router";

const routes = [
  { from: "DAC", to: "DXB", price: 320 },
  { from: "DAC", to: "DEL", price: 180 },
  { from: "DAC", to: "KUL", price: 260 },
  { from: "JFK", to: "LAX", price: 210 },
  { from: "LHR", to: "CDG", price: 95 },
  { from: "DXB", to: "IST", price: 170 },
];

const PopularRoutes = () => {
  return (
    <section className="py-5 mt-10 bg-linear-to-b from-sky-100 to-white rounded">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-sky-600">
          Popular Routes
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-5">
          Most searched routes with best starting prices
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center hover:-translate-y-2 hover:shadow-xl transition"
            >
              <div>
                <p className="text-xl font-bold">
                  {r.from} <Plane className="inline mx-2 text-sky-500" size={18} /> {r.to}
                </p>
                <p className="text-gray-500 text-sm mt-1">Starting from</p>
                <p className="text-sky-600 font-extrabold text-lg">${r.price}</p>
              </div>

              <Link to="/flights" className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition">
                Search
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
