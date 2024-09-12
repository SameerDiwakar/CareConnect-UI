import React, { useState } from "react";


const Navbar = () => {

  return (
    <>
      <nav>
        <div className="nav bg-[#151618] h-22 flex items-center justify-around sticky top-0">
          <div className="logo-section flex items-center gap-0 w-1/3">
            <img src="https://t4.ftcdn.net/jpg/03/56/02/11/240_F_356021129_xu10B4UK64NAxI17YyXq3MRiKIV0R93E.jpg" className="logo h-[25%] w-[25%] object-contain" alt="#" />
            <div className="logo-text text-white text-3xl font-bold">
              Care<span className="text-[#06D889]">Connect</span>
            </div>
          </div>
          <ul className="flex items-center gap-10">
            <li className="text-[#06D889] text-lg gap-2 flex items-center font-[Saira]">
              <i className="fa-solid fa-house"></i>
              <a href="">Home</a>
            </li>
            <li className="text-white text-lg font-[Saira]">
              <a href="">About</a>
            </li>
            <li className="text-white text-lg font-[Saira]">
              <a href="">Service</a>
            </li>
          </ul>
          <div className="purchase items-center flex gap-7">
            <i className="fa-solid fa-cart-plus text-[#06D889] text-4xl"></i>
            <button className="text-lg font-semibold bg-[#06D889] rounded-lg py-2 px-4 font-[Saira]">Purchases</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
