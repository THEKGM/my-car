import React from "react";

function index() {
  return (
    <div className="hero-bg">
      <div className="container-lg">
        <div className="text-2xl text-white flex flex-col gap-3 items-center justify-between mx-auto max-w-4xl text-center top-2/4 relative -translate-y-2/4">
          <h3>Find Your Perfect Ride Today</h3>
          <p>
            "Find your dream car effortlessly. Explore, compare, and drive away
            today!"
          </p>
          <button className="mt-5 px-5 py-2 rounded-full border-2">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
