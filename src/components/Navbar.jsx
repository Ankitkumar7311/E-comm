import React from "react";
import { Link } from "react-router-dom";

let Navbar = () => {
  return <>
      <nav className="flex flex-row items-center max-w-full h-[8vh] bg-white justify-between shadow-md ">
        <div className="flex ">
          <img src="../src/assets/Group 491.png" alt="" className="ml-[2vw] cursor-pointer" />
        </div>
        <section className="w-[42vw]">
          <ul className="flex flex-row justify-evenly mr-[0.5vw]">
            <li className="font-Poppins font-[500] text-[2.2vh] cursor-pointer">HOME</li>
            <li className="font-Poppins font-[500] text-[2.2vh] cursor-pointer">BAG</li>
            <li className="font-Poppins font-[500] text-[2.2vh] cursor-pointer">SNEAKERS</li>
            <li className="font-Poppins font-[500] text-[2.2vh] cursor-pointer">BELT</li>
            <li className="font-Poppins font-[500] text-[2.2vh] cursor-pointer">CONTACT</li>
          </ul>
        </section>
        <section className="w-[10.5vw] mr-[1.5vw]">
          <ul className="flex flex-row justify-evenly self-center">
            <li className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart" >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </li>
            <li className="font-Poppins font-[500] text-[2.2vh] cursor-pointer">Items</li>
            <li className="font-Poppins font-[500] text-[2.2vh] cursor-pointer text-[#bdbdbd]">$0.00</li>
          </ul>
        </section>
      </nav>
    </>
};

export default Navbar;