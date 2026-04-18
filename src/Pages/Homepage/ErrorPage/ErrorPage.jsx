import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center g-linear-to-br from-gray-100 to-gray-200 px-4">
      <div className="text-center max-w-md">
        {/* Big 404 */}
        <h1 className="text-7xl font-extrabold text-gray-800">404</h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-500">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-2xl shadow-md hover:bg-gray-800 transition duration-300">
            Go Back Home
          </button>
        </Link>

        {/* Optional Illustration */}
        <div className="mt-8">
          <img
            src="https://illustrations.popsy.co/gray/web-error.svg"
            alt="Error Illustration"
            className="w-full max-w-xs mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
