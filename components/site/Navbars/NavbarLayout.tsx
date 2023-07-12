"use client";

import { getContactInfo } from "@/schemas/utils/sanity.utils";
import NavbarMain from "./NavBarMain";
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";



const Layout =  ( {
  children,
  route,

}: {
  children: React.ReactNode;
  route: string;
}) => {

  // const contactInfo = await getContactInfo();

  return (
    <>
      {route === "/" ? <Navbar /> : null}
      {route !== "/" && route !== "/about" ? <NavbarMain /> : null}

      {children}

      {/* {route !== "/" ? <Footer footer={contactInfo} /> : null} */}
    </>
  );
};
export default Layout;