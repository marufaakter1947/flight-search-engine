import { Link } from "react-router";
import { Mail, Plane } from "lucide-react";
import logoImage from "../assets/FlyMate-logo.jpg";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[linear-gradient(125.07deg,#38BDF8,#0EA5E9)] py-10 px-6 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src={logoImage}
              alt="FlyMate Logo"
            />
            <h3 className="text-xl font-bold"> Flight Search Engine</h3>
          </div>
         

          <ul className="space-y-2 mt-4 font-medium">
            <li><Link to="/" className="hover:text-sky-200">Home</Link></li>
            <li><Link to="/flights" className="hover:text-sky-200">Flights</Link></li>
            <li><Link to="/deals" className="hover:text-sky-200">Deals</Link></li>
            <li><Link to="/about" className="hover:text-sky-200">About</Link></li>
          </ul>
        </div>

        {/* Features */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4 mt-3">Explore</h3>
          <ul className="space-y-2 font-medium">
            <li><Link to="/my-trips" className="hover:text-sky-200">My Trips</Link></li>
            <li><Link to="/popular-routes" className="hover:text-sky-200">Popular Routes</Link></li>
            <li><Link to="/price-alerts" className="hover:text-sky-200">Price Alerts</Link></li>
            <li><Link to="/support" className="hover:text-sky-200">Support</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4 mt-3">Connect With Us</h3>
          <div className="flex gap-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-200">
              <FaFacebook size={22} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-200">
              <FaXTwitter size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-200">
              <FaInstagram size={22} />
            </a>
          </div>

          <a
            href="mailto:support@flymate.com"
            className="flex items-center gap-2 hover:text-sky-200 font-medium"
          >
            <Mail size={18} /> support@flymate.com
          </a>
        </div>
      </div>

      <div className="border-t border-white/30 mt-8 pt-4 text-center text-sm">
        <p>© {currentYear} FlyMate. All rights reserved.</p>
        <p className="mt-2">
          <Link to="/privacy-policy" className="hover:text-sky-200 mr-3">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-sky-200">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
