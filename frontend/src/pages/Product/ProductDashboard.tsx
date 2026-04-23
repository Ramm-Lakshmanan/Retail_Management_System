import { useNavigate } from "react-router-dom";
import "../../styles/index.css";

export default function ProductDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-4 py-8">
      
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
        
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Product Dashboard
        </h1>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <button
            onClick={() => navigate("/product/updateStocks")}
            className="py-4 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-md"
          >
            Update Stocks
          </button>

          <button
            onClick={() => navigate("/product/updatePrice")}
            className="py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md"
          >
            Update Price
          </button>

          <button
            onClick={() => navigate("/product/delete")}
            className="py-4 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition shadow-md sm:col-span-2"
          >
            Delete Product
          </button>

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