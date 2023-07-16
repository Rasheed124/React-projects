"use client";

import { getContactInfo } from "@/schemas/utils/sanity.utils";
import NavbarMain from "./NavBarMain";
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";



const Layout = async ( {
  children,
  route,

}: {
  children: React.ReactNode;
  route: string;
}) => {

  const contactInfo = await getContactInfo();

  return (
    <>
      {route === "/" ? <Navbar contacts={contactInfo} /> : null}
     
      {route !== "/" && route !== "/about" ? (
        <NavbarMain contacts={contactInfo} />
      ) : null}
      {route == "all" ? <NavbarMain contacts={contactInfo} /> : null}

      {children}

      {route == "about" && <Footer footer={contactInfo} /> }


      {route !== "/" && route == "/all" ? (
        <Footer footer={contactInfo} />
      ) : null}

    </>
  );
};
export default Layout;