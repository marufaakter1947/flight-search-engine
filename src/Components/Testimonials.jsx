const reviews = [
  {
    name: "Ayesha Rahman",
    role: "Frequent Traveler",
    text: "This platform made flight searching super easy. I found cheaper flights in seconds!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Nafis Ahmed",
    role: "Student",
    text: "The UI is clean and fast. Comparing flights has never been this smooth.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Khan",
    role: "Business Traveler",
    text: "I really love the smart filters and popular routes feature. Very helpful!",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-5 mt-10 bg-linear-to-b from-sky-200 to-white rounded">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-sky-600">
          What Our Users Say
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-5">
          Trusted by travelers around the world
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-xl transition"
            >
              <p className="text-gray-600 mb-6">“{r.text}”</p>

              <div className="flex items-center gap-4">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{r.name}</h4>
                  <p className="text-sm text-gray-500">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
