import { motion } from "framer-motion";

const About = () => {
  return (
    <div className=" py-5">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-sky-600 mb-3">
          About FlyMate
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          FlyMate is your ultimate flight companion — helping you find, compare, and book flights with real-time prices and smart filters. Our mission is to make your travel planning effortless and enjoyable.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="bg-sky-100 rounded-xl p-6 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-700">
            To provide the most accurate flight prices, intuitive filters, and a seamless booking experience for all travelers.
          </p>
        </div>

        <div className="bg-sky-100 rounded-xl p-6 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
          <p className="text-gray-700">
            To become the most trusted and user-friendly flight search engine in the world.
          </p>
        </div>

        <div className="bg-sky-100 rounded-xl p-6 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-2">Our Team</h2>
          <p className="text-gray-700">
            A passionate group of developers and designers committed to delivering a modern travel experience.
          </p>
        </div>

        <div className="bg-sky-100 rounded-xl p-6 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-2">Why Choose Us?</h2>
          <p className="text-gray-700">
            We combine real-time data, smart filters, and a clean, responsive design to make travel planning fast and fun.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
