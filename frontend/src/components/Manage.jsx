import React from "react";
import { useSelector } from "react-redux";
import Logo from "../assets/logo.png";
const Manage = () => {

  const user = useSelector((state) => state.user);



  return (
    <div className=" bg-gray-200 h-lvh">
      <div className="md:max-w-[500px] m-auto">
        <div className=" text-center pt-20 ">
          <div className=" flex justify-center">
            <img src={Logo} alt="" className=" w-28 h-28" />
          </div>
          <h2 className=" font-bold text-[1.1rem]">Hello {user.name.toUpperCase()}</h2>
        </div>

        <div className=" pt-10">
          <ul className=" space-y-3 px-4">
            <a href="/change-number">
              <li className=" py-3 border shadow-lg px-3 bg-gray-50 ">
                Edit Phone Number
              </li>
            </a>
            <a href=" /change-password">
              {" "}
              <li className=" py-3 border shadow-lg px-3 bg-gray-50 mt-3">
                Change Password
              </li>
            </a>
          </ul>
        </div>
        <div className=" flex justify-center">
          <div className=" absolute bottom-10  ">
            <h2>TS-WORLD</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
