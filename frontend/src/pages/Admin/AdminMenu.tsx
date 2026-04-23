import { useNavigate } from "react-router-dom";
import "../../styles/index.css";

export default function AdminMenu() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-4 py-8">
      
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
        
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Admin Menu
        </h1>

        {/* Grid Menu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <button
            onClick={() => navigate("/admin/menu/purchase")}
            className="py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md"
          >
            Purchase Details
          </button>

          <button
            onClick={() => navigate("/product")}
            className="py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-md"
          >
            Products Dashboard
          </button>

          <button
            onClick={() => navigate("/admin/menu/stocks")}
            className="py-4 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-md"
          >
            Stocks
          </button>

          <button
            onClick={() => navigate("/admin/menu/purchaseReport")}
            className="py-4 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition shadow-md"
          >
            Purchase Report
          </button>

          <button
            onClick={() => navigate("/admin/menu/salesReport")}
            className="py-4 rounded-xl bg-pink-600 text-white font-semibold hover:bg-pink-700 transition shadow-md col-span-1 sm:col-span-2"
          >
            Sales Report
          </button>

        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/admin")}
          className="w-full py-2 text-sm text-gray-600 hover:underline"
        >
          ← Back to Admin Dashboard
        </button>

      </div>
    </div>
  );
}