import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";

import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { MoonLoader } from "react-spinners";

const Login = () => {
  // const [user,setUser] =useState(null);
  const [show, setShow] = useState(false);
  //   const [email,setEmail] = useState(null);
  const emailRef = useRef(null);
  

  const {
    signInWithEmailAndPasswordFunc,
    signInWithPopupFunc,
    setUser,
    setLoading,
    loading,
  } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state || "/";
  // console.log(location);
  const routeNavigate = useNavigate();
  if (loading) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <MoonLoader />
      </div>
    );
  }
  // if(user){
  //     routeNavigate("/");
  // }

  const handleSignin = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    //  console.log("Sign in function entered",{email,password});

    // signInWithEmailAndPassword(auth,email,password)
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setLoading(false);
        setUser(res.user);

        toast.success("Login Successful");
        routeNavigate(from);
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.message);
      });
  };

  const handleGoogleSignin = () => {
    // signInWithPopup(auth,googleProvider)
    signInWithPopupFunc()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        routeNavigate(from);
        toast.success("Signin Successful");
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.message);
      });
  };

 
  //   console.log(email);

  return (
    <div className="hero bg-base-200 min-h-screen  ">
      <div className="hero-content flex-col  ">
        <form onSubmit={handleSignin}>
          <div className="card bg-base-100 w-full max-w-sm  sm:max-w-md md:max-w-lg shadow-2xl p-6">
            <h1 className="text-3xl md:text-5xl font-bold text-sky-600 text-center mb-4 animate__animated animate__bounce animate__infinite animate__slow">
              Login now!
            </h1>

            <div className="card-body flex justify-center">
              <fieldset className="space-y-4 w-full">
                <label className="block text-sm font-medium mb-1">Email</label>

                <div className="flex justify-center">
                  <input
                    type="email"
                    name="email"
                    ref={emailRef}
                    className="input input-bordered w-full max-w-full"
                    placeholder="Enter your Email"
                  />
                </div>
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>

                <div className="flex justify-center relative">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    className="input input-bordered w-full max-w-full"
                    placeholder="Enter your Password"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-3.25 cursor-pointer z-50"
                  >
                    {show ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                <div className="text-blue-400">
                  
                </div>
                <div className="flex justify-center">
                  <button className="btn btn-neutral bg-[linear-gradient(125.07deg,#38BDF8,#0EA5E9)] w-full max-w-full mt-4">
                    Login
                  </button>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={handleGoogleSignin}
                    className="btn bg-[linear-gradient(125.07deg,#38BDF8,#0EA5E9)] btn-neutral w-full max-w-full mt-4"
                  >
                    <FcGoogle /> Continue with Google
                  </button>
                </div>

                <p className="font-semibold text-center pt-5">
                  Don't Have an account?{" "}
                  <Link className="text-sky-800 hover:underline" to="/signup">
                    Register
                  </Link>
                </p>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
