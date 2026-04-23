import { useNavigate } from "react-router-dom";
import "../styles/index.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 flex items-center justify-center px-4">
      
      <div className="text-center space-y-8">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
          Smart Trolley
        </h1>

        <p className="text-gray-300 text-sm md:text-base">
          Choose your role to continue
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <button
            onClick={() => navigate("/admin")}
            className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200 shadow-md w-full sm:w-auto"
          >
            Admin
          </button>

          <button
            onClick={() => navigate("/customer")}
            className="px-8 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition duration-200 shadow-md w-full sm:w-auto"
          >
            Customer
          </button>

        </div>

      </div>
    </div>
  );
}