import logo from '../assets/logo.png';

import { FaBars, FaTimes } from 'react-icons/fa';
import {
  IoCartOutline,
  IoLogIn,
  IoLogOut,
  IoPersonOutline,
} from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/userSlice';

// import { logout, resetNotifications } from "../features/userSlice";

// import { ProductContext } from "../Context/ProductContext";

const Navbar = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [menu, setMenu] = useState('home');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  // const {getTotalItems} = useContext(ProductContext)

  return (
    <div className="z-10 ">
      <div className="z-[80] w-full">
        <nav>
          <div
            id="navmain"
            className="py-2 w-full  fixed bg-gray-300 shadow-lg z-10"
          >
            <div className="sm:max-w-[1200px] px-6 sl:px-0 m-auto">
              <div className="flex justify-between items-center">
                <div>
                  <a href="/" className="">
                    <img src={logo} alt="" className="w-16 3xl:w-20" />
                  </a>
                </div>
                <div
                  onClick={toggleDropdown}
                  className={`categories cursor-pointer hidden lg:flex relative ${
                    dropdownOpen
                      ? 'bg-gray-700 text-gray-200  w-48 py-2 px-3 rounded-tl-md rounded-tr-md'
                      : ' w-48 bg-gray-500 py-2 px-3 rounded-md'
                  }`}
                >
                  <h3 className="flex items-center justify-between w-full gap-1">
                    Categories
                    <IoIosArrowDown />
                  </h3>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-gray-300 border text-gray-700 border-gray-500 shadow-xl rounded-bl-md rounded-br-md w-48 z-20">
                      <ul className="py-2">
                        <li className="">
                          <Link
                            className="px-4 py-2 hover:bg-gray-100 block"
                            to={`/category/inverters`}
                          >
                            Inverter
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="px-4 py-2 hover:bg-gray-100 block"
                            to={`/category/lithiums`}
                          >
                            Lithium Batteries
                          </Link>
                        </li>
                        <li
                          onClick={() => {
                            setMenu(menu === 'acids');
                          }}
                          className=""
                        >
                          <Link
                            className="px-4 py-2 hover:bg-gray-100 block"
                            to={`/category/acids`}
                          >
                            Acid Batteries
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="px-4 py-2 hover:bg-gray-100 block"
                            to={`/category/solar`}
                          >
                            Solar
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="px-4 py-2 hover:bg-gray-100 block"
                            to={`/category/tubulars`}
                          >
                            Tubular Batteries
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="px-4 py-2 hover:bg-gray-100 block"
                            to="/products"
                          >
                            All Products
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="relative pt-1 ml hidden lg:flex">
                  <form action="" className="flex gap-2">
                    <input
                      type="search"
                      className="bg-gray-400 w-[300px] sl:w-[400px] border border-gray-700 rounded placeholder:text-xl placeholder:text-white pl-10 pr-3 py-1 outline-none"
                      placeholder="search"
                    />
                    <CiSearch className="absolute top-3 text-xl left-3" />
                    <button className="border border-gray-900 hover:bg-gray-900 text-gray-800 hover:text-gray-200 hover:transition duration-200 px-6">
                      search
                    </button>
                  </form>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-6 xl:gap-16">
                    {/* if no user */}
                    {!user && (
                      <Link to="/login">
                        <button className="flex items-center gap-2">
                          <IoLogIn className="text-2xl font-light text-gray-700" />
                          <span className="hidden lg:flex">Login</span>
                        </button>
                      </Link>
                    )}
                    {/* if user */}
                    {user && (
                      <>
                        {user.isAdmin && (
                          <>
                            <Link
                              to="/dashboard"
                              className="flex items-center gap-2"
                            >
                              <IoPersonOutline className="text-2xl font-light text-gray-700" />
                              <span className="hidden lg:flex">Dashboard</span>
                            </Link>

                            <Link
                              to="/new-product"
                              className="flex items-center gap-2"
                            >
                              <IoPersonOutline className="text-2xl font-light text-gray-700" />
                              <span className="hidden lg:flex">Dashboard</span>
                            </Link>
                          </>
                        )}
                        {!user.isAdmin && (
                          <>
                            <Link to="/cart">
                              <div className="relative flex gap-3">
                                <IoCartOutline className="text-2xl font-light text-gray-700" />
                                <span className="hidden lg:flex">Cart</span>

                                <div className="absolute top-[-14px] right-[-10px] lg:right-7 bg-gray-700 rounded-full w-fit h-fit">
                                  {user?.cart.count > 0 && (
                                    <p className="px-2 text-center rounded-full text-[0.7rem] text-gray-200">
                                      {user.cart.count}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/orders"
                              className="flex items-center gap-2"
                            >
                              <span className="hidden lg:flex">Orders</span>
                            </Link>
                          </>
                        )}

                        <Link to="/account">
                          <p className="flex items-center gap-2">
                            <IoPersonOutline className="text-2xl font-light text-gray-700" />
                            <span className="hidden lg:flex">Account</span>
                            <span className="hidden lg:flex">{user.email}</span>
                          </p>
                        </Link>

                        <Link to="#">
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-2"
                          >
                            <IoLogOut className="text-2xl font-light text-gray-700" />
                            <span className="hidden lg:flex">Signout</span>
                          </button>
                        </Link>
                      </>
                    )}
                  </div>
                  <div className="lg:hidden">
                    <FaBars className="text-gray-700 text-2xl cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="relative pt-1 ml lg:hidden">
                <form action="">
                  <input
                    type="search"
                    className="bg-gray-400 w-full rounded-full border border-gray-700 placeholder:text-xl placeholder:text-black pl-10 pr-3 py-1 outline-none"
                    placeholder="search"
                  />
                  <CiSearch className="absolute top-3 text-xl left-3" />
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
