import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../Components/OAuth";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SingUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const navigate = useNavigate();
  function onChange(e) {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timeStamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      console.log(user);
      toast.success("Sign up is Successfull");
      navigate("/");
    } catch (error) {
      // console.log(error);
      toast.error("Something Wrong with registration");
    }
  }
  return (
    <div>
      <h1 className="text-3xl mt-6 font-bold text-center">Sign-Up</h1>
      <div className="flex max-w-6xl mx-auto justify-center px-6 py-12 flex-wrap items-center">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="Key Image"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 items-center">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded text-xl text-gray-700 bg-white border-gray-300  transition ease-in-out mb-6"
            />
            <input
              type="text"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded text-xl text-gray-700 bg-white border-gray-300  transition ease-in-out mb-6"
            />
            <div className="relative mb-6">
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Enter Password"
                onChange={onChange}
                className="w-full text-xl text-gray-700 px-4 py-2 rounded border-gray-400 bg-white transition ease-in-out "
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 cursor-pointer"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 cursor-pointer"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              )}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Already have an account?
                <Link
                  to="/sign-in"
                  className="ml-1 text-red-500 hover:text-red-700 transition duration-75 ease-in-out"
                >
                  Sign In
                </Link>
              </p>
              <p>
                <Link
                  to="/forget-password"
                  className="ml-1 text-blue-500 hover:text-blue-800 transition duration-75 ease-in-out"
                >
                  Forget Password
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 py-3 px-7 text-sm text-white font-medium rounded uppercase hover:bg-blue-700   transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              Sign Up
            </button>
            <div
              className="my-4  flex items-center  before:border-t before:flex-1 before:border-gray-300
          after:border-t after:flex-1 after:border-gray-300"
            >
              <p className="text-center px-2">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </div>
  );
}
