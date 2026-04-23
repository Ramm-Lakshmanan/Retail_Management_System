import { useState } from "react";
import { type AdminLogin } from "../../types/AdminLogin";
import { useNavigate } from "react-router-dom";
import "../../styles/index.css"

export default function AdminLogin() {
  const navigate = useNavigate();
  const [loginform, setloginform] = useState<AdminLogin>({
    email: "",
    password: "",
  });

  const BASE_URL = "http://localhost:8080/api/Admin/login";

  const login = () => {
    fetch(`${BASE_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginform),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === true) {
          alert("Login Successfull!!!");
          navigate("/admin/menu");
        } else {
          alert("Invalid Credentials!!!");
          navigate("/admin");
        }
      });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Admin Login
        </h1>

        {/* Form */}
        <div className="flex flex-col gap-4">
          
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) =>
              setloginform({ ...loginform, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) =>
              setloginform({ ...loginform, password: e.target.value })
            }
          />

          <button
            onClick={login}
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Login
          </button>

        </div>

        {/* Back link */}
        <p
          onClick={() => navigate("/admin")}
          className="text-center text-sm text-gray-600 cursor-pointer hover:underline"
        >
          ← Back to Dashboard
        </p>

      </div>
    </div>
  );
}