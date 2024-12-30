import React from 'react';

const WaitingList = () => {
  return (
    <form className="flex flex-col items-center">
      <label htmlFor="email" className="sr-only">
        Email Address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      <button
        type="submit"
        className="mt-4 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-all"
      >
        Join Waiting List
      </button>
    </form>
  );
};

export default WaitingList;
