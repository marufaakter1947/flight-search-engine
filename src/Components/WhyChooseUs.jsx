import { ShieldCheck, DollarSign, Zap, SlidersHorizontal } from "lucide-react";

const features = [
  { icon: <DollarSign size={28} />, title: "Best Prices", desc: "Compare fares from top airlines instantly." },
  { icon: <Zap size={28} />, title: "Live Data", desc: "Real-time flight prices and availability." },
  { icon: <SlidersHorizontal size={28} />, title: "Smart Filters", desc: "Filter by stops, airlines and price." },
  { icon: <ShieldCheck size={28} />, title: "Secure Booking", desc: "Your data and payments are protected." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-5 mt-10 bg-white rounded">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-sky-600">
          Why Choose FlyMate?
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-5">
          Built for speed, simplicity and smarter travel decisions
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-sky-100 rounded-2xl p-6 text-center hover:bg-sky-500 hover:text-white transition-all duration-300 group shadow"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-sky-100 group-hover:bg-white/20 mb-4">
                {f.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm opacity-80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
