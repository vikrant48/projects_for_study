import React from "react";

const SubscriptionCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Subscribe Now
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Get unlimited access to exclusive content and updates.
        </p>

        <div className="flex justify-center items-center">
          <span className="text-4xl font-bold text-gray-800">$9.99</span>
          <span className="text-gray-500 text-sm ml-2">/ month</span>
        </div>

        <ul className="mt-6 space-y-3 text-gray-600">
          <li className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Access to premium articles
          </li>
          <li className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Weekly email newsletters
          </li>
          <li className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Cancel anytime
          </li>
        </ul>

        <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200">
          Subscribe Now
        </button>

        <p className="text-gray-500 text-sm text-center mt-4">
          No credit card required for trial
        </p>
      </div>
    </div>
  );
};

export default SubscriptionCard;
