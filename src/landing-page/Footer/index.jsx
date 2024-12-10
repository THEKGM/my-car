import React from "react";

function index() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-gray-400 text-sm">
              At <strong>MyCar</strong>, we are committed to providing a
              seamless car-buying experience. Explore our wide range of vehicles
              and experience quality service like never before.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-400 text-sm" style={{ lineHeight: "30px" }}>
              <strong>Phone:</strong> (123) 456-7890
              <br />
              <strong>Email:</strong> contact@yourdealership.com
              <br />
              <strong>Address:</strong> 123 Main Street, Your City, Your State,
              12345
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500 text-xs font-bold">
            © {new Date().getFullYear()} MyCar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default index;
