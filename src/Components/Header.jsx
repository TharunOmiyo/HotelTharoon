import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  function PathName(router) {
    if (router === location.pathname) {
      return true;
    }
  }

  return (
    <div className="border-b bg-white shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-10 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          ></img>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`py-3 cursor-pointer text-sm text-gray-400  font-semibold border-b-[3px] border-b-transparent ${
                PathName("/") && "!text-black !border-b-red-500"
              } `}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={` py-3 cursor-pointer text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                PathName("/offers") && "!text-black !border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={` py-3 cursor-pointer text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                PathName("/sign-in") && "!text-black !border-b-red-500"
              }`}
              onClick={() => navigate("sign-in")}
            >
              SignIn
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
