import React from "react";
import shoes from "../assets/shoe.png";

const Badge = () => {
  return (
    <section className="bg-[#40BFFF] w-full flex flex-col md:flex-row items-center mt-4 justify-between px-6 md:px-12 lg:px-20 py-10 rounded-md overflow-hidden">
    
      <div className="text-white max-w-sm text-center md:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-none">
          Adidas Men Running Sneakers
        </h1>
        <h2 className="text-sm md:text-base lg:text-lg mt-3 opacity-90">
          Performance and design. Taken right to the edge.
        </h2>
        <button className="mt-6 inline-block underline font-semibold tracking-wide text-sm  md:text-base hover:text-gray-100 focus:outline-none">
          SHOP NOW
        </button>
      </div>

   
      <div className="mt-6 md:mt-0 flex justify-center md:justify-end w-full md:w-1/2">
        <img
          src={shoes}
          alt="Adidas Men Running Sneakers"
          className="h-48 md:h-60 lg:h-72 object-contain drop-shadow-md  [transform:rotateY(180deg)]"
        />
      </div>
    </section>
  );
};

export default Badge;






