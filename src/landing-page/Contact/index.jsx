import React from "react";
import ImageOne from "../../assets/dealership-one.avif";
import ImageTwo from "../../assets/dealership-two.jpg";
import ImageThree from "../../assets/dealership-three.jpeg";
import ImageFour from "../../assets/dealership-four.jpeg";
import ContactForum from "../../component/ContactForum";

function Index() {
  return (
    <section className="bg-gray-100 py-20" id="contact">
      <div className="container-lg">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Have questions or need assistance? We're here to help! Reach out to us
          using the form below or through the provided contact details.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong> contact@yourdealership.com
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> 123 Main Street, Your City, Your
                State, 12345
              </p>
            </div>

            {/* forum */}
            <div className="grid grid-cols-2 gap-4">
              {[ImageOne, ImageTwo, ImageThree, ImageFour].map(
                (item, index) => (
                  <div className="h-40" key={index}>
                    <img
                      src={item}
                      alt={`forum-img-${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Contact Form */}
          <ContactForum />
        </div>
      </div>
    </section>
  );
}

export default Index;
