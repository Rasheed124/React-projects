// import Category from "./pages/Category";
import Home from "./pages/Home";
// import LoginSignUp from "./pages/LoginSignUp";

import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import NewProduct from "./pages/NewProduct";
import ProductPage from "./pages/ProductPage";
// import Product from "./pages/Product";
// import Account from "./pages/Account";
// import Cart from "./pages/Cart";
// import ListProduct from "./components/ListProduct";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";

function App() {

  const user = useSelector((state) => state.user);

  
  return (
    <>
      {/* <Navbar />  */}

      <Routes>
           <Route path="/" element={<Home />} />
       
           {!user && (
                <>
                      <Route path="/signup" element={<SignUp />} />
                      <Route path="/login" element={<Login />} />
                </>
            )}

        <Route path="/new-product" element={<NewProduct />} />

        <Route path="/product/:id" element={<ProductPage />} />
        {/* <Route path="/category/:category" element={<CategoryPage />} /> */}

        <Route path="*" element={<Home />} />
        {/* <Route path="/inverters" element={<Category category="inverter" />} />
        <Route path="/lithiums" element={<Category category="lithium" />} />
        <Route path="/acids" element={<Category category="acid" />} />
        <Route path="/solars" element={<Category category="solar" />} />
        <Route path="/tubulars" element={<Category category="tubular" />} />
        <Route path="/product/:name/:productId" element={<Product />} />
        <Route path="/products" element={<ListProduct />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} /> */}

      </Routes>

   
    </>
  );
}

export default App;