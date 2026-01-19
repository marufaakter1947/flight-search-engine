const places = [
  { name: "Dubai", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c" },
  { name: "Paris", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" },
  { name: "London", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e" },
  { name: "Istanbul", img: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXN0YW1idWx8ZW58MHx8MHx8fDA%3D" },
//   { name: "New York", img: "https://images.unsplash.com/photo-1549924231-f129b911e442" },
  { name: "New York", img: "https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Kuala Lumpur", img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07" },
];

const Destinations = () => {
  return (
    <section className="py-5 mt-10 bg-white rounded">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-sky-600 ">
          Popular Destinations
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-5">
          Explore the most loved destinations chosen by travelers around the world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((p, i) => (
            <div
              key={i}
              className="relative h-72 rounded-2xl overflow-hidden group shadow-lg"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
