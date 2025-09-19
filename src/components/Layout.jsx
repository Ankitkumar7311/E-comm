import React from "react";
import Sidebar from "./Sidebar";
import Badge from "./Badge";
import ProductCard from "./ProductCard";

const Layout = () => {
  return (
    <div className="flex  ">
      
      <div className="">
      <Sidebar />
     </div>

      
      <div className="">
      <Badge />
       <ProductCard/>
      </div>
      

    </div>
  );
};

export default Layout;
