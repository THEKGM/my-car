import React from "react";
import { IoIosPricetags } from "react-icons/io";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";

const services = [
  {
    icon: <MdProductionQuantityLimits style={{ height: 40, width: 40 }} />,
    title: "Premium Car Products for Every Journey",
    desc: "Explore our wide range of car products designed to enhance your driving experience, from accessories to maintenance solutions, tailored for every car enthusiast.",
  },
  {
    icon: <IoIosPricetags style={{ height: 40, width: 40 }} />,
    title: "Affordable Pricing for Quality Car Products",
    desc: "Get the best value for your money with competitive pricing on top-notch car products, ensuring quality without compromising your budget.",
  },
  {
    icon: <MdMiscellaneousServices style={{ height: 40, width: 40 }} />,
    title: "Reliable Car Services You Can Trust",
    desc: "Experience expert car services tailored to your needs, from maintenance and repairs to upgrades, ensuring your vehicle performs at its best.",
  },
];
function index() {
  return (
    <div className="py-10 sm:py-20 md:py-40" id="services">
      <div className="container-lg">
        <div className="flex flex-col gap-10 items-center justify-between">
          <div className="text-2xl italic">What we offer you!</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {services.map((item, index) => (
              <div
                className="border-2 min-h-40 flex flex-col justify-center  gap-3 px-5 py-5 rounded-lg"
                key={index}
              >
                {item.icon}
                <h5 className="font-bold">{item.title}</h5>
                <p className="mt-3">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
