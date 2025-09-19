import React from "react";

const Sidebar = () => {
  const hotDeals = [
    { name: "Nike", count: 2 },
    { name: "Airmax", count: 48 },
    { name: "Nike", count: 14 },
    { name: "Adidas", count: 15 },
    { name: "Vans", count: 23 },
    { name: "All Stars", count: 1 },
    { name: "Adidas", count: 95 },
  ];

  const prices = [{ ranger: "Ranger:", label: "$13.99 - $25.99" }];

  const colors = [
    "bg-blue-500",
    "bg-red-500",
    "bg-black-500",
    "bg-yellow-500",
    "bg-pink-500",
    "bg-gray-500",
  ];

  let brand = [
    { name: "Nike", count: 99 },
    { name: "Nike", count: 99 },
    { name: "Adidas", count: 99 },
    { name: "Siemens", count: 99 },
    ]
  return (
    <aside className="h-screen w-[90%] flex flex-col p-2 m-3">
    
      <div className=" bg-[#f5f6f7] p-4 rounded-lg ">
        <h2 className="text-xl font-bold  mb-4">Hot Deals</h2>
        <ul className="space-y-3 ">
          {hotDeals.map((deal, index) => (
            <li
              key={index}
              className="hover:text-blue-600 cursor-pointer flex justify-between"
            >
              <span>{deal.name}</span>
              <span>{deal.count}</span>
            </li>
          ))}
        </ul>
      </div>

      
      <div className="mt-8  bg-[#f5f6f7] p-4 rounded-lg ">
        <h3 className="text-lg font-bold mb-3">PRICES</h3>
        <ul className=" mb-3">
          {prices.map((price, index) => (
            <li
              key={index}
              className="hover:text-blue-600 cursor-pointer flex justify-between"
            >
              <span>{price.ranger}</span>
              <span>{price.label}</span>
            </li>
          ))}
        </ul>
        <input type="range" className="w-full" />
      </div>

   
      <div className="mt-8  bg-[#f5f6f7] p-4 rounded-lg ">
        <h3 className="text-lg  mb-3 font-bold">COLOR</h3>
        <div className="flex gap-3 flex-wrap">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`w-5 h-5 rounded-full cursor-pointer border ${color}`}
            ></div>
          ))}
        </div>
      </div>

      <div className="mt-5  bg-[#f5f6f7] p-4 rounded-lg ">
        <h2 className="text-xl font-bold  mb-4">Hot Deals</h2>
        <ul className="space-y-3 ">
          {brand.map((brand, index) => (
            <li
              key={index}
              className="hover:text-blue-600 cursor-pointer flex justify-between"
            >
              <span>{brand.name}</span>
              <span>{brand.count}</span>
            </li>
          ))}
        </ul>
      </div>

        <button className="font-bold mt-5   bg-[#f5f6f7]  h-12 p-4 rounded-lg">MORE</button>
    </aside>
  );
};

export default Sidebar;
