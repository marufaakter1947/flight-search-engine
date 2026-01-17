import { GoogleAuthProvider } from "firebase/auth";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Link, useLocation, useNavigate } from "react-router";

import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../Firebase/Firebase.config";
import { MoonLoader } from "react-spinners";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    setLoading,
    signInWithPopupFunc,
    setUser,
  } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state || "/";
  // console.log(location);
  const routeNavigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;
    // console.log("Sign up function entered",{email,password,name,photo});

    if (password.length < 6) {
      toast.error("Length must be at least 6 character");
      setIsSubmitting(false);
      return;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      toast.error("Password must include at least one uppercase letter");
      setIsSubmitting(false);
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      toast.error("Must have a Lowercase letter in the password");
      setIsSubmitting(false);

      return;
    }

    // createUserWithEmailAndPassword(auth, email, password)
    createUserWithEmailAndPasswordFunc(email, password)
      .then(() => {
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            setUser({ ...auth.currentUser });
            setLoading(false);
            toast.success("Signup Successful");
            navigate("/");
          })
          .catch((er) => {
            toast.error(er.message);
          })
          .finally(() => setIsSubmitting(false));
      })
      .catch((e) => {
        toast.error(e.message);
        setIsSubmitting(false);
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
        toast.error(e.message);
      });
  };

  return (
    <div>
      {isSubmitting ? (
        <div className="flex justify-center items-center h-[80vh]">
          <MoonLoader></MoonLoader>
        </div>
      ) : (
        <div className="hero bg-base-200 min-h-screen  ">
          <div className="hero-content flex-col  ">
            <div className="card bg-base-100 w-full max-w-sm  sm:max-w-md md:max-w-lg  shadow-2xl p-6">
              <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 animate__animated animate__bounce animate__infinite animate__slow">
                Join Us Today!
              </h1>
              <form onSubmit={handleSignup}>
                <div className="card-body flex justify-center">
                  <fieldset className="space-y-4 w-full">
                    <label className="block text-sm font-medium mb-1">
                      Name
                    </label>

                    <div className="flex justify-center">
                      <input
                        type="text"
                        name="name"
                        className="input input-bordered w-full max-w-full "
                        placeholder="Enter your Name"
                        required
                      />
                    </div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>

                    <div className="flex justify-center">
                      <input
                        type="email"
                        name="email"
                        className="input input-bordered w-full max-w-full "
                        placeholder="Enter your Email"
                        required
                      />
                    </div>
                    <label className="block text-sm font-medium mb-1">
                      Photo-URL
                    </label>

                    <div className="flex justify-center">
                      <input
                        type="text"
                        name="photo"
                        className="input input-bordered w-full max-w-full "
                        placeholder="Enter your Photo-URL"
                        required
                      />
                    </div>
                    <label className="block text-sm font-medium mb-1">
                      Password
                    </label>

                    <div className="flex justify-center relative">
                      <input
                        type={show ? "text" : "password"}
                        name="password"
                        className="input input-bordered w-full max-w-full "
                        placeholder="Enter your Password"
                        required
                      />
                      <span
                        onClick={() => setShow(!show)}
                        className="absolute right-3 top-3.25 cursor-pointer z-50"
                      >
                        {show ? <FaEye /> : <FaEyeSlash />}
                      </span>
                    </div>

                    <div className="flex justify-center">
                      <button className="btn btn-neutral w-full max-w-full mt-4">
                        Register
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={handleGoogleSignin}
                        className="btn btn-neutral w-full max-w-full mt-4"
                      >
                        <FcGoogle /> Continue with Google
                      </button>
                    </div>
                    <p className="font-semibold text-center pt-5">
                      Already Have an account?{" "}
                      <Link
                        className="text-secondary hover:underline"
                        to="/login"
                      >
                        Login
                      </Link>
                    </p>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
