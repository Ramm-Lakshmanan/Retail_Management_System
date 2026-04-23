import {BrowserRouter,Route,Routes} from "react-router-dom";

import Home from "./pages/Home"
import CustomerDashboard from "./pages/Customer/CustomerDashboard";
import Beverages from "./pages/Customer/Beverages";
import Dairy from "./pages/Customer/Dairy";
import Detergents from "./pages/Customer/Detergents";
import Snacks from "./pages/Customer/Snacks";
import Utensils from "./pages/Customer/Utensils";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminRegister from "./pages/Admin/AdminRegister";
import AdminLogin from "./pages/Admin/AdminLogin";
import Purchase from "./pages/Admin/Purchase";
import ProductDashboard from "./pages/Product/ProductDashboard";
import RemoveProduct from "./pages/Product/RemoveProduct";
import UpdateProduct from "./pages/Product/UpdateProduct";
import AdminMenu from "./pages/Admin/AdminMenu";
import Stocks from "./pages/Admin/Stocks";
import UpdateStocks from "./pages/Product/UpdateStocks";
import PurchaseReport from "./pages/Admin/PurchaseReport";

export default function App(){
    return(
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Home />}/>

                <Route path="/admin" element={<AdminDashboard/>}/>
                <Route path="/admin/register" element={<AdminRegister/>}/>
                <Route path="/admin/login" element={<AdminLogin/>}/>
                
                <Route path="/admin/menu" element={<AdminMenu/>}/>
                <Route path="/admin/menu/stocks" element={<Stocks/>}/>
                <Route path="/admin/menu/purchase" element={<Purchase/>}/>
                <Route path="/admin/menu/purchaseReport" element={<PurchaseReport/>}/>

                <Route path="/product" element={<ProductDashboard/>}/>
                <Route path="/product/updateStocks" element={<UpdateStocks/>}/>
                <Route path="/product/delete" element={<RemoveProduct/>}/>
                <Route path="/product/updatePrice" element={<UpdateProduct/>}/>

                <Route path="/customer" element={<CustomerDashboard/>}/>
                <Route path="/customer/Beverages" element={<Beverages/>}/>
                <Route path="/customer/Dairy" element={<Dairy/>}/>
                <Route path="/customer/Detergents" element={<Detergents/>}/>
                <Route path="/customer/Snacks" element={<Snacks/>}/>
                <Route path="/customer/Utensils" element={<Utensils/>}/>
            </Routes>
        </BrowserRouter>
    )
}

