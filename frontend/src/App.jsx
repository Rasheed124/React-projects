import Category from "./pages/Category";
import Home from "./pages/Home";
import LoginSignUp from "./pages/LoginSignUp";

import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import ListProduct from "./components/ListProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/inverters"
          element={<Category category="inverter" />}
        ></Route>
        <Route
          path="/lithiums"
          element={<Category category="lithium" />}
        ></Route>
        <Route path="/acids" element={<Category category="acid" />}></Route>
        <Route path="/solars" element={<Category category="solar" />}></Route>
        <Route
          path="/tubulars"
          element={<Category category="tubular" />}
        ></Route>
        <Route path="/product" element={<Product />}>
          <Route path="/product/:name/:productId" element={<Product />}></Route>
        </Route>

        <Route path="/products" element={<ListProduct />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<LoginSignUp />}></Route>


      </Routes>
    </>
  );
}

export default App;
