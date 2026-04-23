import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/index.css";

export default function UpdateStocks() {
  const [pid, setpid] = useState<number>(0);
  const [quantity, setquantity] = useState<number>(0);
  const navigate = useNavigate();

  const BASE_URL = "http://localhost:8081/api/Products/updateStock";

  const updateStocks = () => {
    if (!pid || quantity < 0) {
      alert("Please enter valid Product ID and Quantity");
      return;
    }

    fetch(`${BASE_URL}/${pid}/${quantity}`, {
      method: "PUT",
    })
      .then((res) => {
        if (res.ok) {
          alert("Stocks Updated Successfully!!!");
          navigate("/product");
        } else {
          alert("Update failed!!!");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-4 py-8">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-6">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Update Stocks
        </h1>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          
          <input
            type="number"
            placeholder="Enter Product ID"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            onChange={(e) => setpid(Number(e.target.value))}
          />

          <input
            type="number"
            placeholder="New Quantity"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            onChange={(e) => setquantity(Number(e.target.value))}
          />

        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          
          <button
            onClick={updateStocks}
            className="w-full py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition duration-200 shadow-md"
          >
            Update Stocks
          </button>

          <button
            onClick={() => navigate("/product")}
            className="w-full py-2 text-sm text-gray-600 hover:underline"
          >
            ← Back to Product Dashboard
          </button>

        </div>

      </div>
    </div>
  );
}