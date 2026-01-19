import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-sky-300 rounded to-white py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-8 md:p-12"
      >
        <h1 className="text-3xl text-center md:text-4xl font-extrabold text-sky-600 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-8 text-center">
          Your privacy is important to us. This policy explains how FlyMate collects and uses your information.
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="font-bold text-xl text-gray-800 mb-2">1. Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email, and flight search data to improve our service.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl text-gray-800 mb-2">2. How We Use Your Data</h2>
            <p>
              Your data is used to provide flight results, manage bookings, and enhance user experience.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl text-gray-800 mb-2">3. Data Protection</h2>
            <p>
              We implement modern security measures to keep your information safe and secure.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl text-gray-800 mb-2">4. Third-Party APIs</h2>
            <p>
              We use third-party services like Amadeus API only to fetch flight-related data.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-xl text-gray-800 mb-2">5. Your Rights</h2>
            <p>
              You can request access, update, or deletion of your data at any time.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
