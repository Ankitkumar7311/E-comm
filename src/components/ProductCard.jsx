import React, { useEffect, useState } from "react";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

 
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

  };

  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
      
        {currentProducts.map((p) => (
          <div
            key={p.id}
            className="bg-white border rounded-lg shadow-sm overflow-hidden"
          >
          
            <section className="relative bg-[#efefef]">
              {p.isHot && (
                <span className="absolute left-1 bg-[#FF4858] text-white text-xs font-semibold px-3 py-1.5 rounded">
                  HOT
                </span>
              )}
              <img
                src={p.imageUrl}
                alt={p.name}
                className="w-full h-48 object-cover"
              />
            </section>
          
            <section className="bg-[#f5f5f5] text-center p-3">
              <h1 className="text-sm font-semibold text-gray-800">{p.name}</h1>
              <div className="flex justify-center items-center gap-2 mt-2">
                <span className="text-blue-600 font-bold text-lg">
                  ${p.price}
                </span>
                <span className="line-through text-gray-500 text-sm">
                  ${p.discountPrice}
                </span>
                <span className="text-red-500 font-bold text-sm">
                  {p.discountPercent}% off
                </span>
              </div>
            </section>
          </div>
        ))}
      </main>

     
      <div className="flex justify-center items-center gap-3 mt-6 bg-gray-200 ">
      
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}

        
        
      </div>
    </>
  );
};

export default ProductCard;
