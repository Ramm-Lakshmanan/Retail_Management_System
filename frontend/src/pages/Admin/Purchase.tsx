import { useState } from "react";
import { type Product } from "../../types/Product";
import { useNavigate } from "react-router-dom";
import "../../styles/index.css"

export default function Purchase() {
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    supplierId:0,
    supplierName:"",
    description: "",
    category: "",
    costPrice:0,
    sellingPrice: 0,
    quantity: 0,
    imageUrl: "",
    available: false,
  });

  const BASE_URL = "http://localhost:8081/api/Products";

  const add = () => {
    fetch(`${BASE_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => {
        if (res.ok) {
          alert("Purchase and Product Details Added Successfully!!!");
          navigate("/admin/menu")
        } else {
          alert("Failed to add Purchase Details!!!");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-4 py-8">
      
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
        
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Purchase Dashboard
        </h1>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <input
            type="number"
            placeholder="Product ID"
            className="input"
            onChange={(e) =>
              setProduct({ ...product, id: Number(e.target.value) })
            }
          />

          <input
            type="text"
            placeholder="Name"
            className="input"
            onChange={(e) =>
              setProduct({ ...product, name: e.target.value })
            }
          />

          <input
            type="number"
            placeholder="Supplier ID"
            className="input"
            onChange={(e) =>
              setProduct({ ...product, supplierId: Number(e.target.value) })
            }
          />

          <input
            type="text"
            placeholder="Supplier Name"
            className="input"
            onChange={(e) =>
              setProduct({ ...product,supplierName: e.target.value })
            }
          />

          <select
            className="input"
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
          >
            <option value="">Select Category</option>
            <option value="Beverages">Beverages</option>
            <option value="Dairy">Dairy</option>
            <option value="Detergents">Detergents</option>
            <option value="Snacks">Snacks</option>
            <option value="Utensils">Utensils</option>
          </select>

          <input
            type="number"
            placeholder="Cost Price"
            className="input"
            onChange={(e) =>
              setProduct({ ...product, costPrice: Number(e.target.value) })
            }
          />

          <input
            type="number"
            placeholder="Selling Price"
            className="input"
            onChange={(e) =>
              setProduct({ ...product, sellingPrice: Number(e.target.value) })
            }
          />

          <input
            type="number"
            placeholder="Quantity"
            className="input"
            onChange={(e) =>
              setProduct({ ...product, quantity: Number(e.target.value) })
            }
          />

          <input
            type="text"
            placeholder="Image URL"
            className="input"
            onChange={(e) =>
              setProduct({ ...product, imageUrl: e.target.value })
            }
          />

        </div>

        {/* Description */}
        <textarea
          placeholder="Description"
          rows={3}
          className="input resize-none"
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />

        {/* Checkbox */}
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-medium">Available</label>
          <input
            type="checkbox"
            className="w-5 h-5"
            onChange={(e) =>
              setProduct({ ...product, available: e.target.checked })
            }
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          
          <button
            onClick={add}
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Add Product
          </button>

          <button
            onClick={() => navigate("/admin/menu")}
            className="w-full py-2 text-sm text-gray-600 hover:underline"
          >
            ← Back to Admin Menu
          </button>

        </div>

      </div>
    </div>
  );
}