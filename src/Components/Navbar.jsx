import { useContext } from "react";
import logoImg from "../assets/FlyMate-logo.jpg";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { FadeLoader } from "react-spinners";

const Navbar = () => {
  const { user, setUser, signOutFunc, loading } = useContext(AuthContext);
  //   console.log(user);
  const activeNavLink = ({ isActive }) => {
    return isActive
      ? "text-transparent bg-clip-text bg-[linear-gradient(125.07deg,#38BDF8,#0EA5E9)]  underline underline-offset-4 decoration-[#38BDF8] font-semibold"
      : "text-[#000000e6]";
  };

  const handleSignout = () => {
    // signOut(auth)
    signOutFunc()
      .then(() => {
        toast.success("Logout Successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="navbar px-6 py-0 min-h-8  bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#000000e6] font-semibold text-[16px]"
          >
            <li>
              <NavLink to="/" className={activeNavLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/flights" className={activeNavLink}>
                Flights
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={activeNavLink}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={activeNavLink}>
                Contact Us
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/deals" className={activeNavLink}>
                Deals
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/my-trips" className={activeNavLink}>
                My Trips
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          to="/"
          className="w-12 h-12 cursor-pointer flex items-center rounded-full"
        >
          <img src={logoImg} alt="Navbar logo image" className="rounded-full" />
          <h2 className="font-bold">Fly<span className="text-[#38BDF8]">Mate</span></h2>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#000000e6] font-semibold text-[16px] [&_li>a:hover]:bg-transparent!">
          <li>
            <NavLink to="/" className={activeNavLink}>
              Home
            </NavLink>
          </li>
         
          <li>
            <NavLink to="/flights" className={activeNavLink}>
              Flights
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={activeNavLink}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={activeNavLink}>
              Contact Us
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/deals" className={activeNavLink}>
              Deals
            </NavLink>
          </li> */}
           {user && (
            <li>
              <NavLink to="/my-trips" className={activeNavLink}>
                My Trips
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <FadeLoader className="mr-9" />
        ) : user ? (
          <div className="text-center flex justify-center gap-4 items-center">
            <div className="relative group">
              <img
                src={user?.photoURL || "https://via.placeholder.com/88"}
                className="h-12 w-12 rounded-full object-contain object-center cursor-pointer"
                alt=""
              />
              <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {user?.displayName}
              </span>
            </div>

            <button
              onClick={handleSignout}
              className="btn bg-[linear-gradient(125.07deg,#89F336,#458018)] text-white text-[16px] font-semibold"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <NavLink
              to="/login"
              className="btn  bg-[linear-gradient(125.07deg,#38BDF8,#0EA5E9)] text-white text-[16px] font-semibold mr-2"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="btn bg-[linear-gradient(125.07deg,#38BDF8,#0EA5E9)] text-white text-[16px] font-semibold"
            >
              Signup
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
