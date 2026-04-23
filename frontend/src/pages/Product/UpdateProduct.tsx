import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/index.css";

export default function UpdateProduct() {
  const navigate = useNavigate();

  const [pid, setpid] = useState<number>(0);
  const [costprice, setcostprice] = useState<number>(0);
  const [sellingprice, setsellingprice] = useState<number>(0);

  const BASE_URL = "http://localhost:8081/api/Products/updateProductPrice";

  const update = () => {
    if (!pid || !costprice || !sellingprice) {
      alert("Please fill all fields properly");
      return;
    }

    fetch(`${BASE_URL}/${pid}/${costprice}/${sellingprice}`, {
      method: "PUT",
    })
      .then((res) => {
        if (res.ok) {
          alert("Product Updated Successfully!!!");
        } else {
          alert("Failed to update Product!!!");
        }
        navigate("/product");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-4 py-8">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-6">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Update Product Price
        </h1>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          
          <input
            type="number"
            placeholder="Enter Product ID"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => setpid(Number(e.target.value))}
          />

          <input
            type="number"
            placeholder="New Cost Price"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => setcostprice(Number(e.target.value))}
          />

          <input
            type="number"
            placeholder="New Selling Price"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => setsellingprice(Number(e.target.value))}
          />

        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          
          <button
            onClick={update}
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Update Price
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