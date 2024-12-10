import React from "react";
import bgImage from "../../assets/about-image.jpg";

function index() {
  return (
    <section className="bg-gray-100 py-10 sm:py-20 md:py-40 px-5" id="about">
      <div className="container-lg text-center flex flex-col md:flex-row gap-10 justify-between">
        <div className="w-full md:w-2/4">
          <img
            src={bgImage}
            alt="bg-Image"
            className="h-full object-cover rounded-3xl"
          />
        </div>
        <div className="w-full md:w-2/4 text-left">
          <h2 className="text-5xl font-bold text-gray-800 mb-10">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to <strong>[My Car]</strong>, your trusted partner in car
            buying and selling. With years of experience in the automotive
            industry, we are dedicated to helping you find the perfect vehicle
            to fit your lifestyle and budget.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            At <strong>[My Car]</strong>, we believe in offering more than just
            cars—we provide a seamless and transparent car-buying experience.
            Whether you're looking for a brand-new model or a pre-owned gem, our
            team is here to guide you every step of the way.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Our mission is to create lasting relationships with our customers by
            delivering exceptional service, quality vehicles, and unparalleled
            support. Your satisfaction is our top priority, and we’re committed
            to making your car-buying journey enjoyable and stress-free.
          </p>
        </div>
      </div>
    </section>
  );
}

export default index;
