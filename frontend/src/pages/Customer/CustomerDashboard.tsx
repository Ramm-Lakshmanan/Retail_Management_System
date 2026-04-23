import { useNavigate } from "react-router-dom";
import "../../styles/index.css";

export default function CustomerDashboard() {
  const navigate = useNavigate();

  const categories = [
    { name: "Beverages", path: "/customer/Beverages" },
    { name: "Dairy", path: "/customer/Dairy" },
    { name: "Detergents", path: "/customer/Detergents" },
    { name: "Snacks", path: "/customer/Snacks" },
    { name: "Utensils", path: "/customer/Utensils" },
    { name: "Bill", path: "/customer/Bill" },
  ];


  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 to-gray-900 px-4 py-10">
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Customer Dashboard
      </h1>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        
        {categories.map((item) => (
          <button
            key={item.name}
            onClick={() => navigate(item.path)}
            className="bg-white text-gray-800 rounded-2xl shadow-md p-8 text-lg font-semibold hover:shadow-xl hover:scale-105 transition duration-300 flex items-center justify-center"
          >
            {item.name}
          </button>
        ))}

      </div>
    </div>
  );
}