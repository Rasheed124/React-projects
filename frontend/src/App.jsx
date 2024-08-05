// import Category from "./pages/Category";
import Home from './pages/Home';
// import LoginSignUp from "./pages/LoginSignUp";

import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { useSelector } from 'react-redux';

import ProductPage from './pages/ProductPage';
import CategoryPage from './components/CategoryPage';
import NewProduct from './pages/admin/NewProduct';
import ScrollToTop from './components/ScrollToTop';
import CartPage from './pages/CartPage';
import DeliveryPage from './pages/DeliveryPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import Account from './pages/Account';
import Manage from './components/Manage';
import OrdersPage from './pages/OrdersPage';
import CloseAccount from './pages/CloseAccountPage';
import ChangeNumber from './pages/ChangeNumber';
import ChangePassword from './pages/ChangePassword';
import Help from './pages/Help';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Upgrade from './pages/Upgrade';
import Repair from './pages/Repair';
import Cookies from './pages/Cookies';
import About from './pages/About';
import Enquiries from './pages/Enquiries';
import Privacy from './pages/Privacy';
import AdminDashboard from './pages/admin/AdminDashboard';
import EditProduct from './pages/admin/EditProduct';

function App() {
  const user = useSelector((state) => state.user);

  return (
    <>
      {/* REMEMBER 404 Page */}

      {/* <Navbar />  */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/upgrade" element={<Upgrade />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/enquiries" element={<Enquiries />} />
        <Route path="/about" element={<About />} />

        {!user && (
          <>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </>
        )}

        {user && user.isAdmin && (
          <>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/product/:id/edit" element={<EditProduct />} />
          </>
        )}

        {user && (
          <>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/confirm-order" element={<OrderConfirmationPage />} />
            <Route path="/account" element={<Account />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/close-account" element={<CloseAccount />} />
            <Route path="/change-number" element={<ChangeNumber />} />
            <Route path="/change-password" element={<ChangePassword />} />
          </>
        )}

        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />

        <Route path="/new-product" element={<NewProduct />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
