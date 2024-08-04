import React from 'react';
import SideBar from '../../components/admin/SideBar';
import AdminHeader from './AdminHeader';
import { Route, Routes } from 'react-router-dom';
import AdminListProduct from '../../components/admin/AdminListProduct';

const AdminDashboard = () => {
  return (
    <>
      <AdminHeader />
      <div className="flex gap-5">
        <SideBar />

        <div className="flex-1 border-2 rounded-lg shadow-sm m-3">
          <AdminListProduct />
          <Routes>
            {/* <Routes path="/addproduct" element={<AddProduct />}></Routes> */}
            <Route path="/admin" element={<AdminListProduct />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
