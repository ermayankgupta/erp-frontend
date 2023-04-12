import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex justify-center min-h-screen ">
        <div className="my-auto">
          <p className="text-orange text-8xl font-bold">404</p>
          <p className="font-medium text-2xl mt-8 mb-2">Oops! Page not found!</p>
          <p className="font-light mb-4 text-base">The page you requested was not found.</p>
          <Link to="/" className="bg-gradient-to-r from-[#ff9b44] to-[#fc6075] px-6 rounded-full py-2 mb-10">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
