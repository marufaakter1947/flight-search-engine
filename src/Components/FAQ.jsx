import { useState } from "react";

const faqs = [
  {
    q: "Is this platform free to use?",
    a: "Yes, searching and comparing flights is completely free.",
  },
  {
    q: "Do you provide real-time flight data?",
    a: "Yes, we fetch live flight prices and availability from trusted sources.",
  },
  {
    q: "Can I filter flights by airline and price?",
    a: "Of course! You can filter by airline, stops, time and price range.",
  },
  {
    q: "Is my personal data secure?",
    a: "Yes, we follow strong security practices to protect your information.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-5 mt-10 rounded bg-linear-to-b from-sky-200 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-sky-600 ">
         Frequently Asked Questions
        </h2>
 <p className="text-center text-gray-500 mt-2 mb-5">
          Find quick answers to the most common questions about our flight booking service.
        </p>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="border border-sky-100 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center p-5 font-semibold text-left text-gray-800 hover:bg-sky-50"
              >
                {f.q}
                <span className="text-sky-500 text-xl">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {open === i && (
                <div className="px-5 pb-5 text-gray-600 animate-fadeIn">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
