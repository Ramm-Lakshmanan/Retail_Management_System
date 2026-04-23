import { useState } from "react";
import { type Supplier } from "../../types/Supplier";
import "../../styles/index.css";
import { useNavigate } from "react-router-dom";

export default function PurchaseReport() {
  const navigate = useNavigate();

  const [ch, setch] = useState<string>("");
  const [year, setyear] = useState<number>(0);
  const [month, setmonth] = useState<number>(0);
  const [supplier, setsupplier] = useState<string>("");

  const [data, setdata] = useState<Supplier[]>([]);
  const BASE_URL = "http://localhost:8081/api/Supplier";

  const fetchReport = () => {
    let url = "";

    if (ch === "overall") {
      url = `${BASE_URL}/report`;
    } else if (ch === "monthly") {
      url = `${BASE_URL}/monthlyReport/${month}`;
    } else if (ch === "annual") {
      url = `${BASE_URL}/annualReport/${year}`;
    } else if (ch === "supplier") {
      url = `${BASE_URL}/supplierReport/${supplier}`;
    }

    if (!url) return;

    fetch(url)
      .then((res) => res.json())
      .then((res) => setdata(res))
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 space-y-6">
        
        <h1 className="text-2xl font-bold text-center">
          Purchase Report Dashboard
        </h1>

        {/* Report Type Selector */}
        <select
          className="input"
          value={ch}
          onChange={(e) => {
            setch(e.target.value);
            setdata([]); // clear old data
          }}
        >
          <option value="">Select Report Type</option>
          <option value="overall">Overall</option>
          <option value="monthly">Monthly</option>
          <option value="annual">Annual</option>
          <option value="supplier">Supplier</option>
        </select>

        {/* Conditional Inputs */}
        {ch === "monthly" && (
          <input
            type="number"
            placeholder="Enter Month (1-12)"
            className="input"
            onChange={(e) => setmonth(Number(e.target.value))}
          />
        )}

        {ch === "annual" && (
          <input
            type="number"
            placeholder="Enter Year (e.g. 2026)"
            className="input"
            onChange={(e) => setyear(Number(e.target.value))}
          />
        )}

        {ch === "supplier" && (
          <input
            type="text"
            placeholder="Enter Supplier Name"
            className="input"
            onChange={(e) => setsupplier(e.target.value)}
          />
        )}

        {/* Fetch Button */}
        <button
          onClick={fetchReport}
          className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Get Report
        </button>

        {/* Results */}
        <div className="grid gap-4">
          {data.length === 0 ? (
            <p className="text-center text-gray-500">
              No data to display
            </p>
          ) : (
            data.map((item) => (
              <div
                key={item.supplierId}
                className="p-4 bg-gray-50 rounded-xl shadow"
              >
                <p><strong>Supplier:</strong> {item.supplierName}</p>
                <p><strong>Product:</strong> {item.productName}</p>
                <p><strong>Quantity:</strong>{item.quantity}</p>
                <p><strong>Cost:</strong> ₹ {item.costPrice}</p>
                <p><strong>Date:</strong> {item.createdAt}</p>
              </div>
            ))
          )}
        </div>

        {/* Back */}
        <button
          onClick={() => navigate("/admin/menu")}
          className="text-sm text-gray-600 hover:underline"
        >
          ← Back to Admin Menu
        </button>

      </div>
    </div>
  );
}