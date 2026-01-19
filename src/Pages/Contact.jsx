import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className=" py-4">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-sky-600 mb-3">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you! Fill the form below and we'll get back to you as soon as possible.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
      >
        <div>
          <label className="font-semibold text-gray-700">Name</label>
          <input
            type="text"
            required
            value={name}
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        <div>
          <label className="font-semibold text-gray-700">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email address"
            className="w-full border rounded-lg px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        <div>
          <label className="font-semibold text-gray-700">Message</label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write Your Message Here"
            rows={5}
            className="w-full border rounded-lg px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-sky-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl transition w-full"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
