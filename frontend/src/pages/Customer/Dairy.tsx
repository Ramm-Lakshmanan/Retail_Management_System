import { useState, useEffect } from "react";
import { type Product } from "../../types/Product";
import "../../styles/index.css"

export default function Dairy() {
  const [product, setproduct] = useState<Product[]>([]);

  const BASE_URL = "http://localhost:8080/api/Customer";

  const viewProductsByCategory = () => {
    fetch(`${BASE_URL}/viewProducts/Dairy`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setproduct(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    viewProductsByCategory();

    const interval = setInterval(() => {
      viewProductsByCategory();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-100 px-4 py-8">
      
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Dairy Products
      </h1>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
        {product.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No products available
          </p>
        ) : (
          product.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >
              
              {/* Image */}
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-4 flex flex-col gap-2 flex-grow">
                
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {item.description}
                </p>

                <p className="text-blue-600 font-bold mt-auto">
                  ₹ {item.sellingPrice}
                </p>

              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
}