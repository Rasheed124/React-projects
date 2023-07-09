"use client";

import { getContactInfo } from "@/schemas/utils/sanity.utils";
import Footer from "../Footer/Footer";
import NavbarMain from "./NavBarMain";
import Navbar from "./Navbar";



export default async function Layout({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) 


{

   const contactInfo = await getContactInfo();


  return (
    <>
      {route === "/" ? <Navbar /> : null}
      {route !== "/" && route !== "/about" ? <NavbarMain /> : null}

      {children}

      {route !== "/" ? <Footer footer={contactInfo} /> : null}
    </>
  );
}