import React from "react";
import SideBar from "../components/SideBar";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import ListProduct from "../components/ListProduct";

const Admin = () => {
  return (
    <div className="flex gap-5">
      <SideBar />

      <div className="flex-1 border-2 rounded-lg shadow-sm">
        <Routes>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route path="/allproduct" element={<ListProduct />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
