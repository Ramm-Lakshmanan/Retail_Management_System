import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/index.css";

export default function RemoveProduct() {
  const [pid, setpid] = useState<number>(0);
  const navigate = useNavigate();

  const BASE_URL = "http://localhost:8081/api/Products/deleteProduct";

  const del = () => {
    if (!pid) {
      alert("Please enter a valid Product ID");
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    fetch(`${BASE_URL}/${pid}`, {
      method: "DELETE",
    })
      .then(() => {
        alert("Product Deleted Successfully!!!");
        navigate("/product");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-4 py-8">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-6">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-red-600">
          Delete Product
        </h1>

        {/* Warning */}
        <p className="text-sm text-center text-gray-500">
          This action cannot be undone. Please enter the Product ID carefully.
        </p>

        {/* Input */}
        <input
          type="number"
          placeholder="Enter Product ID"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          onChange={(e) => setpid(Number(e.target.value))}
        />

        {/* Actions */}
        <div className="flex flex-col gap-3">
          
          <button
            onClick={del}
            className="w-full py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition duration-200 shadow-md"
          >
            Delete Product
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