import { useNavigate } from "react-router-dom";
import "../../styles/index.css"

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-8">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Admin Dashboard
        </h1>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          
          <button
            onClick={() => navigate("/admin/register")}
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Register
          </button>

          <button
            onClick={() => navigate("/admin/login")}
            className="w-full py-3 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-900 transition duration-200 shadow-md"
          >
            Login
          </button>

          {/* Back to Home */}
          <button
            onClick={() => navigate("/")}
            className="w-full py-2 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition duration-200"
          >
            ← Back to Home
          </button>

        </div>

      </div>
    </div>
  );
}