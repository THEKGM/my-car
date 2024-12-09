import React from "react";

function index() {
  return (
    <nav className="bg-black text-white">
      <div className="container-lg">
        <div className="flex justify-between">
          <div className="text-2xl italic">myCar</div>
          <div>
            <ul className="flex gap-8">
              <li className="px-4 py-2 hover:bg-slate-800 cursor-pointer">
                <a href="#home">Home.</a>
              </li>
              <li className="px-4 py-2 hover:bg-slate-800 cursor-pointer">
                <a href="#about">About.</a>
              </li>
              <li className="px-4 py-2 hover:bg-slate-800 cursor-pointer">
                <a href="#service">Service.</a>
              </li>
              <li className="px-4 py-2 hover:bg-slate-800 cursor-pointer">
                <a href="#contact">Contact.</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default index;
