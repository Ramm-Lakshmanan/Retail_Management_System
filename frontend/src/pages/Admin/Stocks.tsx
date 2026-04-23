import { useState, useEffect } from "react";
import { type Product } from "../../types/Product";
import { useNavigate } from "react-router-dom";
import "../../styles/index.css";

export default function Stocks() {
  const navigate = useNavigate();
  const [data, setdata] = useState<Product[]>([]);

  const BASE_URL = "http://localhost:8081/api/Products/viewAllProducts";

  const stocks = () => {
    fetch(`${BASE_URL}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setdata(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    stocks();

    const interval = setInterval(() => {
      stocks();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-100 px-4 py-8">
      
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6 space-y-6">
        
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Stocks Dashboard
        </h1>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-5 bg-gray-200 text-gray-700 font-semibold p-3 rounded-xl">
          <p>ID</p>
          <p>Name</p>
          <p>Cost Price</p>
          <p>Selling Price</p>
          <p className="text-right">Quantity</p>
        </div>

        {/* Data */}
        <div className="flex flex-col gap-3">
          
          {data.length === 0 ? (
            <p className="text-center text-gray-500">
              No stock data available
            </p>
          ) : (
            data.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-5 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <p className="font-medium text-gray-700">
                  <span className="md:hidden">ID: </span>
                  {item.id}
                </p>

                <p className="text-gray-800">
                  <span className="md:hidden">Name: </span>
                  {item.name}
                </p>

                <p className="text-gray-600">
                  <span className="md:hidden">Cost: </span>
                  ₹ {item.costPrice ?? 0}
                </p>

                <p className="text-blue-600 font-semibold">
                  <span className="md:hidden">Selling: </span>
                  ₹ {item.sellingPrice ?? 0}
                </p>

                <p
                  className={`font-semibold md:text-right ${
                    item.quantity < 10
                      ? "text-red-600"
                      : item.quantity < 30
                      ? "text-yellow-600"
                      : "text-green-600"
                  }`}
                >
                  <span className="md:hidden">Qty: </span>
                  {item.quantity}
                </p>
              </div>
            ))
          )}

        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/admin/menu")}
          className="w-full py-2 text-sm text-gray-600 hover:underline"
        >
          ← Back to Admin Menu
        </button>

      </div>
    </div>
  );
}