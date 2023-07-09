"use client";

import { getContactInfo } from "@/schemas/utils/sanity.utils";
import Footer from "../Footer/Footer";
import NavbarMain from "./NavBarMain";
import Navbar from "./Navbar";

import { HiOutlineShare } from "react-icons/hi";

import { MdOutlineCancel } from "react-icons/md";
import Link from "next/link";

const Layout = async ({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) => {
  const contactInfo = await getContactInfo();

  return (
    <div className="">
       
      <div>
        {route === "/" ? <Navbar /> : null}
        {route !== "/" && route !== "/about" ? <NavbarMain /> : null}
      </div>

      <div>{children}</div>

      <div>
        {route !== "/" ? <Footer footer={contactInfo} /> : null}
      </div>
    </div>
  );
};
export default Layout;
