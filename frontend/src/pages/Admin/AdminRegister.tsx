import { useState } from "react";
import { type AdminReg } from "../../types/AdminReg";
import "../../styles/index.css"

export default function AdminRegister() {
  const [regform, setregform] = useState<AdminReg>({
    email: "",
    name: "",
    password: "",
  });

  const BASE_URL = "http://localhost:8080/api/Admin/register";

  const register = () => {
    fetch(`${BASE_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(regform),
    })
      .then(() => {
        alert("ADMIN REGISTERED SUCCESSFULLY!!!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Admin Register
        </h1>

        {/* Form */}
        <div className="flex flex-col gap-4">
          
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            onChange={(e) =>
              setregform({ ...regform, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            onChange={(e) =>
              setregform({ ...regform, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            onChange={(e) =>
              setregform({ ...regform, password: e.target.value })
            }
          />

          <button
            onClick={register}
            className="w-full py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition duration-200 shadow-md"
          >
            Register
          </button>

        </div>
        <p
          onClick={() => window.history.back()}
          className="text-center text-sm text-gray-600 cursor-pointer hover:underline"
        >
          ← Back to Dashboard
        </p>

      </div>
    </div>
  );
}