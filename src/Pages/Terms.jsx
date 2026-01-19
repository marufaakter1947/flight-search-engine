import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className=" bg-linear-to-br from-sky-300 to-white py-5 rounded px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-8 md:p-12"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-sky-600 mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-500 mb-8 text-center">
          By using FlyMate, you agree to the following terms and conditions.
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="font-bold text-xl text-gray-800 mb-2">1. Use of Service</h2>
            <p>
              FlyMate is a flight search and booking assistance platform. You agree to use it only for lawful purposes.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl text-gray-800 mb-2">2. Account Responsibility</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account information.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl text-gray-800 mb-2">3. Booking Disclaimer</h2>
            <p>
              FlyMate does not directly operate airlines. Prices and availability depend on third-party APIs.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl text-gray-800 mb-2">4. Limitation of Liability</h2>
            <p>
              We are not responsible for flight delays, cancellations, or price changes.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl text-gray-800 mb-2">5. Updates</h2>
            <p>
              We may update these terms at any time. Continued use means you accept the changes.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Terms;
