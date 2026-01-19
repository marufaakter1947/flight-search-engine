import { Plane, Search, MapPin, Calendar } from "lucide-react";
import HeroImg from "../assets/Hero-bg.avif";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";


const Hero = () => {
    const [from, setFrom] = useState("");
const [to, setTo] = useState("");
const [date, setDate] = useState("");
const [loading, setLoading] = useState(false);
const navigate = useNavigate();

const handleSearch = () => {
  if (!from || !to || !date) return toast("Fill all fields");
  navigate(`/flights?from=${from}&to=${to}&date=${date}`);
};
  return (
    <section className="relative rounded overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(125.07deg,#38BDF8,#0EA5E9)]" />
      <div
  className="absolute inset-0 opacity-25 bg-cover bg-center"
  style={{ backgroundImage: `url(${HeroImg})` }}
/>


      <div className="relative container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white">

        {/* Left content */}
        <div>
          <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full text-sm mb-4">
            <Plane size={16} /> Smart Flight Search
          </span>

          <h1 className="text-3xl  font-extrabold leading-tight">
            Find the best Flights in minutes <br />
            with real-time prices
          </h1>

          <p className="mt-5 text-white/90 max-w-xl">
            FlyMate helps you explore the best flight deals with live pricing,
            powerful filters, and beautiful visual insights — all in one place.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              to="/flights"
              className="inline-flex items-center gap-2 bg-white text-sky-600 font-semibold px-6 py-3 rounded-xl shadow hover:scale-105 transition"
            >
              <Search size={18} /> Search Flights
            </Link>

            <Link
              to="/my-trips"
              className="inline-flex items-center gap-2 border border-white/60 px-6 py-3 rounded-xl hover:bg-white/10 transition"
            >
              Explore My Trips
            </Link>
          </div>
        </div>

        {/* Right card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 text-gray-800">
          <h3 className="font-bold text-lg mb-4">Quick Search</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
              <MapPin size={18} className="text-sky-500" />
              <input
  type="text"
  placeholder="From (DAC)"
  className="w-full outline-none text-sm"
  value={from}
  onChange={(e) => setFrom(e.target.value.toUpperCase())}
/>

              {/* <input type="text" placeholder="From (DAC)" className="w-full outline-none text-sm" /> */}
            </div>

            <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
              <MapPin size={18} className="text-sky-500" />
              {/* <input type="text" placeholder="To (DXB)" className="w-full outline-none text-sm" /> */}
              <input
  type="text"
  placeholder="To (DXB)"
  className="w-full outline-none text-sm"
  value={to}
  onChange={(e) => setTo(e.target.value.toUpperCase())}
/>

            </div>

            <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
              <Calendar size={18} className="text-sky-500" />
              {/* <input type="date" className="w-full outline-none text-sm" /> */}
              <input
  type="date"
  className="w-full outline-none text-sm"
  value={date}
  onChange={(e) => setDate(e.target.value)}
/>

            </div>

            <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
              <Calendar size={18} className="text-sky-500" />
              <input type="date" className="w-full outline-none text-sm" />
            </div>
          </div>

          <button
  onClick={handleSearch}
  disabled={loading}
  className="mt-4 w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold"
>
  {loading ? "Searching..." : "Search Flights"}
</button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
