import { Search, Sliders, CreditCard } from "lucide-react";

const steps = [
  { icon: <Search size={30} />, title: "Search Flights", desc: "Enter route and date to find flights instantly." },
  { icon: <Sliders size={30} />, title: "Compare & Filter", desc: "Use smart filters to choose best option." },
  { icon: <CreditCard size={30} />, title: "Book & Manage", desc: "Book flights and manage trips easily." },
];

const HowItWorks = () => {
  return (
    <section className="py-5 bg-linear-to-b from-white to-sky-200 mt-10 rounded">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-sky-600">
          How It Works
        </h2>
        <p className="text-center text-gray-500 mt-2 ">
          Follow these simple steps to search, book, and manage your flights easily.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-3 transition duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-4 animate-pulse">
                {s.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{s.title}</h3>
              <p className="text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
