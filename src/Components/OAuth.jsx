import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <div>
      <button
        className="w-full bg-red-500 flex items-center justify-center uppercase rounded py-3 px-7 text-sm font-medium text-white shadow-sm hover:bg-red-700 
      hover:shadow-lg active:bg-red-800 active:shadow-lg"
      >
        <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
        Continue to Google
      </button>
    </div>
  );
}
