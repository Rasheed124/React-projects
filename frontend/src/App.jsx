import Category from "./pages/Category";
import Home from "./pages/Home";
import LoginSignUp from "./pages/LoginSignUp";

import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import ListProduct from "./components/ListProduct";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <>
      {/* <Navbar />  */}

      <Routes>
           <Route path="/" element={<Home />} />
        <Route path="/inverters" element={<Category category="inverter" />} />
        <Route path="/lithiums" element={<Category category="lithium" />} />
        <Route path="/acids" element={<Category category="acid" />} />
        <Route path="/solars" element={<Category category="solar" />} />
        <Route path="/tubulars" element={<Category category="tubular" />} />
        <Route path="/product/:name/:productId" element={<Product />} />
        <Route path="/products" element={<ListProduct />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>

   
    </>
  );
}

export default App;